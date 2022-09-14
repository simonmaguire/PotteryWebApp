import React from "react";
import { Form, Col, Row, Card } from "react-bootstrap";
import GeneralSection from "./GeneralSection";
import ThrowingSection from "./ThrowingSection";
import TrimmingSection from "./TrimmingSection";
import GlazingSection from "./GlazingSection";
import ResultSection from "./ResultSection";

const PotForm: React.FC = () => {
  return (
    <div>
      <GeneralSection></GeneralSection>
      <ThrowingSection></ThrowingSection>
      <TrimmingSection></TrimmingSection>
      <GlazingSection></GlazingSection>
      <ResultSection></ResultSection>
    </div>
  );
};

export default PotForm;
