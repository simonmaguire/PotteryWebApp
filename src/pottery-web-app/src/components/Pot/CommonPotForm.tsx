import React from "react";
import GeneralSection from "./GeneralSection";
import ThrowingSection from "./ThrowingSection";
import TrimmingSection from "./TrimmingSection";
import GlazingSection from "./GlazingSection";
import ResultSection from "./ResultSection";
import { useForm, FormProvider } from "react-hook-form";

const CommonPotForm: React.FC<SectionProps> = (props) => {
  const methods = useForm<IPotInfo>();

  return (
    <FormProvider {...methods}>
      <form>
        <GeneralSection
          potInfo={props.potInfo}
          handleChange={props.handleChange}
          // handleSelectChange={updatePotInfoSelect}
        ></GeneralSection>
        <ThrowingSection
          potInfo={props.potInfo}
          handleChange={props.handleChange}
        ></ThrowingSection>
        <TrimmingSection
          potInfo={props.potInfo}
          handleChange={props.handleChange}
        ></TrimmingSection>
        <GlazingSection
          potInfo={props.potInfo}
          handleChange={props.handleChange}
        ></GlazingSection>
        <ResultSection
          potInfo={props.potInfo}
          handleChange={props.handleChange}
        ></ResultSection>
      </form>
    </FormProvider>
  );
};

export default CommonPotForm;
