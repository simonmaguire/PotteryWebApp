import React, { useEffect } from "react";
import GeneralSection from "./GeneralSection";
import ThrowingSection from "./ThrowingSection";
import TrimmingSection from "./TrimmingSection";
import GlazingSection from "./GlazingSection";
import ResultSection from "./ResultSection";
import { Container, Button } from "react-bootstrap";
import { useState } from "react";
// import { IPotInfo } from "../../types";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { updatePot, getPot, deletePot } from "../../API";
import { useNavigate } from "react-router-dom";

const PotForm: React.FC = () => {
  let initialState: IPotInfo = {
    _id: "",
    stage: "",
    clay: "",
    name: "",
    category: "",
    clay_weight: "",
    throw_height: "",
    throw_width: "",
    throw_notes: "",
    green_decorations: "",
    trim_notes: "",
    glazes: "",
    glaze_notes: "",
    result_height: "",
    result_width: "",
    result_notes: "",
  }; //I feel like this shouldnt be necessary

  const loadPot = (): void => {
    getPot(
      window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
    ).then(({ data: { pot } }: IPotInfo | any) => {
      setPotInfo(pot);
    });
  };

  const [potInfo, setPotInfo] = useState<IPotInfo>(initialState);
  useEffect(loadPot, []);

  const methods = useForm<IPotInfo>();
  const navigate = useNavigate();

  //TODO? Probably create different funcs for changing different input types. 2 isnt too bad but it'll grow
  const updatePotInfo = (
    ev: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    console.log(ev.target.name, " - ", ev.target.value);
    setPotInfo({ ...potInfo, [ev.target.name]: ev.target.value });
  };

  const handleSavePot = (): void => {
    updatePot(potInfo).then(({ data: { pot } }: IPotInfo | any) => {
      console.log(pot);
    });
  };

  const handleDeletePot = (): void => {
    deletePot(potInfo._id).then(({ data: { pot } }: IPotInfo | any) => {
      navigate("/");
    });
  };

  return (
    <div>
      <Container>
        <FormProvider {...methods}>
          <form>
            <GeneralSection
              potInfo={potInfo}
              handleChange={updatePotInfo}
              // handleSelectChange={updatePotInfoSelect}
            ></GeneralSection>
            <ThrowingSection
              potInfo={potInfo}
              handleChange={updatePotInfo}
            ></ThrowingSection>
            <TrimmingSection
              potInfo={potInfo}
              handleChange={updatePotInfo}
            ></TrimmingSection>
            <GlazingSection
              potInfo={potInfo}
              handleChange={updatePotInfo}
            ></GlazingSection>
            <ResultSection
              potInfo={potInfo}
              handleChange={updatePotInfo}
            ></ResultSection>
            <Button variant="outline-primary" onClick={() => navigate("/")}>
              Cancel
            </Button>
            <Button variant="outline-primary" onClick={handleSavePot}>
              Save
            </Button>
            <Button variant="outline-primary" onClick={handleDeletePot}>
              Delete Pot
            </Button>
          </form>
        </FormProvider>
      </Container>
    </div>
  );
};

export default PotForm;
