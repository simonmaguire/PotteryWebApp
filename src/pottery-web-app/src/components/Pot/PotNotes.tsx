import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getPot } from "../../API";
import { BLANK_POT } from "../../common/Constants";
import PotForm from "./PotForm";

const OBJECTID_LENGTH = 24;

const PotNotes: React.FC = () => {
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [potInfo, setPotInfo] = useState<IPotInfo>({
    ...BLANK_POT,
    _id: id || "",
  });

  const loadPot = (): void => {
    //TODO: cleaner catch block
    if (potInfo._id.length === OBJECTID_LENGTH) {
      try {
        getPot(potInfo._id).then(({ data: { pot } }: IPotInfo | any) => {
          setPotInfo(pot);
          setIsLoading(false);
        });
      } catch (e) {
        console.log(e);
      }
    } else if (potInfo._id === "new") {
      setIsLoading(false);
    } else {
      console.log("Wrong Id FORMAT");
    }
  };
  useEffect(loadPot, [potInfo._id]);

  //Update methods
  const updatePotInfo = (
    ev: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    setPotInfo({ ...potInfo, [ev.target.name]: ev.target.value });
  };

  return (
    <div>
      <Container>
        {isLoading ? (
          <div>...Loading</div>
        ) : (
          <PotForm potInfo={potInfo} handleChange={updatePotInfo} />
        )}
      </Container>
    </div>
  );
};

export default PotNotes;
