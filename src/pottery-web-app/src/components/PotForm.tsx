import React from "react";
import GeneralSection from "./GeneralSection";
import ThrowingSection from "./ThrowingSection";
import TrimmingSection from "./TrimmingSection";
import GlazingSection from "./GlazingSection";
import ResultSection from "./ResultSection";
import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import { IPotInfo } from "../types";

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

  const updatePotInfo = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setPotInfo({ ...potInfo, [ev.target.name]: ev.target.value });
  };

  return (
    <div>
      <Container>
        <GeneralSection
          potInfo={potInfo}
          handleChange={updatePotInfo}
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
        <Button variant="outline-primary" onClick={() => console.log(potInfo)}>
          Create
        </Button>
      </Container>
    </div>
  );
};

export default PotForm;
