import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getPot } from "../../API";
import { BLANK_POT } from "../../common/Constants";
import { initialValuesAsStrings } from "../../common/utility";
import PotForm from "./PotForm";
import { Spinner } from "react-bootstrap";

const OBJECTID_LENGTH = 24;

const PotNotes = () => {
  let { id } = useParams();

  const [isLoadingForm, setIsLoadingForm] = useState<boolean>(true);
  const [potInfo, setPotInfo] = useState<IPotInfo>({
    ...BLANK_POT,
    _id: id || "",
  });

  const setIdAfterSave = (id: string) => {
    setPotInfo({ ...potInfo, _id: id });
  };

  const loadPot = (): void => {
    //TODO: cleaner catch block
    if (potInfo._id.length === OBJECTID_LENGTH) {
      try {
        getPot(potInfo._id).then(({ data: { pot } }: IPotInfo | any) => {
          setPotInfo(initialValuesAsStrings(pot));
          setIsLoadingForm(false);
        });
      } catch (e) {
        console.log(e);
      }
    } else if (potInfo._id === "new") {
      setIsLoadingForm(false);
    } else {
      console.log("Wrong Id FORMAT");
    }
  };
  useEffect(loadPot, []);

  return (
    <div>
      <Container id="pot-form-container">
        {isLoadingForm ? (
          <Spinner
            id="loading-spinner"
            animation="border"
            variant="primary"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <PotForm potInfo={potInfo} setIdAfterSave={setIdAfterSave} />
        )}
      </Container>
    </div>
  );
};

export default PotNotes;
