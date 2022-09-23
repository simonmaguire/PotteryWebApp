import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { updatePot, getPot, deletePot } from "../../API";
import { useNavigate } from "react-router-dom";
import { BLANK_POT } from "../../Constants";
import CommonPotForm from "./CommonPotForm";
import { addPot } from "../../API";

const PotForm: React.FC = () => {
  const navigate = useNavigate();

  const [potInfo, setPotInfo] = useState<IPotInfo>({
    ...BLANK_POT,
    _id: window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    ),
  });

  const loadPot = (): void => {
    if (potInfo._id !== "new" && potInfo._id !== "old") {
      getPot(potInfo._id).then(({ data: { pot } }: IPotInfo | any) => {
        setPotInfo(pot);
      });
    }
  };
  useEffect(loadPot, []);

  //Button Methods
  const handleSavePot = (): void => {
    updatePot(potInfo).then(({ data: { pot } }: IPotInfo | any) => {});
  };

  const handleDeletePot = (): void => {
    deletePot(potInfo._id).then(({ data: { pot } }: IPotInfo | any) => {
      navigate("/");
    });
  };

  const handleAddPot = (): void => {
    addPot(potInfo).then(({ data: { pot } }: IPotInfo | any) => {
      navigate(`/pot/${pot._id}`);
    });
  };

  //onChange method for fields
  const updatePotInfo = (
    ev: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    setPotInfo({ ...potInfo, [ev.target.name]: ev.target.value });
  };

  return (
    <div>
      <Container>
        <CommonPotForm
          potInfo={potInfo}
          handleChange={updatePotInfo}
        ></CommonPotForm>
        <Button variant="outline-primary" onClick={() => navigate("/")}>
          Cancel
        </Button>
        {potInfo._id !== "new" ? (
          <div>
            <Button variant="outline-primary" onClick={handleSavePot}>
              Save
            </Button>
            <Button variant="outline-primary" onClick={handleDeletePot}>
              Delete Pot
            </Button>
          </div>
        ) : (
          <div>
            <Button variant="outline-primary" onClick={handleAddPot}>
              Create
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default PotForm;
