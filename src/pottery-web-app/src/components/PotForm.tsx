import React from "react";
import GeneralSection from "./GeneralSection";
import ThrowingSection from "./ThrowingSection";
import TrimmingSection from "./TrimmingSection";
import GlazingSection from "./GlazingSection";
import ResultSection from "./ResultSection";
import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import { IPotInfo } from "../types";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

const initialState = () => {
  const defaultPot: IPotInfo = {
    id: "",
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
  return defaultPot;
};

const PotForm: React.FC = () => {
  let pot = initialState();
  const [potInfo, setPotInfo] = useState<IPotInfo>(pot);
  const methods = useForm<IPotInfo>();

  //TODO? Probably create different funcs for changing different input types. 2 isnt too bad but it'll grow
  const updatePotInfo = (
    ev: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    console.log(ev.target.name, " - ", ev.target.value);
    setPotInfo({ ...potInfo, [ev.target.name]: ev.target.value });
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
            <Button variant="outline-primary">Cancel</Button>
            <Button
              variant="outline-primary"
              onClick={() => console.log(potInfo)}
            >
              Create
            </Button>
          </form>
        </FormProvider>
      </Container>
    </div>
  );
};

export default PotForm;
