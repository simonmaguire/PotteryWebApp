import React from "react";
import GeneralSection from "./GeneralSection";
import ThrowingSection from "./ThrowingSection";
import TrimmingSection from "./TrimmingSection";
import GlazingSection from "./GlazingSection";
import ResultSection from "./ResultSection";
import { Container, Button } from "react-bootstrap";
import { useState } from "react";
// import { IPotInfo } from "../../types";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { addPot } from "../../API";
import { useNavigate } from "react-router-dom";

const PotForm: React.FC = () => {
  let initialState: IPotInfo = {
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
  };
  const [potInfo, setPotInfo] = useState<IPotInfo>(initialState);

  const methods = useForm<IPotInfo>();
  const navigate = useNavigate();

  //TODO? Probably create different funcs for changing different input types. 2 isnt too bad but it'll grow
  const updatePotInfo = (
    ev: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    console.log(ev.target.name, " - ", ev.target.value);
    setPotInfo({ ...potInfo, [ev.target.name]: ev.target.value });
  };

  const handleAddPot = (): void => {
    addPot(potInfo).then(({ data: { pot } }: IPotInfo | any) => {
      console.log(pot);
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
            <Button variant="outline-primary" onClick={handleAddPot}>
              Create
            </Button>
          </form>
        </FormProvider>
      </Container>
    </div>
  );
};

export default PotForm;
