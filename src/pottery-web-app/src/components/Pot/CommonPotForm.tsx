import React, { useEffect } from "react";
import GeneralSection from "./GeneralSection";
import ThrowingSection from "./ThrowingSection";
import TrimmingSection from "./TrimmingSection";
import GlazingSection from "./GlazingSection";
import ResultSection from "./ResultSection";
import { useForm, FormProvider } from "react-hook-form";
import { BLANK_POT } from "../../Constants";
import { validationSchema } from "./FormValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

interface CommonFormProps extends SectionProps {
  setFormValid: (valid: boolean) => void;
}

const CommonPotForm: React.FC<CommonFormProps> = (props) => {
  const methods = useForm<IPotInfo>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: BLANK_POT,
    resolver: yupResolver(validationSchema),
  });

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
