import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getPot } from "../../API";
import { BLANK_POT } from "../../common/Constants";
import { initialValuesAsStrings } from "../../common/utility";
import PotForm from "./PotForm";

const OBJECTID_LENGTH = 24;

const PotNotes = () => {
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [potInfo, setPotInfo] = useState<IPotInfo>({
    ...BLANK_POT,
    _id: id || "",
  });

  const setIdAfterSave = (id: string) => {
    setPotInfo({ ...potInfo, _id: id });
  };

  const loadPot = (): void => {
    //TODO: cleaner catch block
    console.log(potInfo._id);

    if (potInfo._id.length === OBJECTID_LENGTH) {
      try {
        getPot(potInfo._id).then(({ data: { pot } }: IPotInfo | any) => {
          setPotInfo(initialValuesAsStrings(pot));
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
  useEffect(loadPot, []);

  return (
    <div>
      <Container>
        {isLoading ? (
          <div>...Loading</div>
        ) : (
          <PotForm potInfo={potInfo} setIdAfterSave={setIdAfterSave} />
        )}
      </Container>
    </div>
  );
};

export default PotNotes;
