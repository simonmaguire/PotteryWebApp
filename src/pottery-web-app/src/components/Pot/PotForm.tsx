import React from "react";
import { updatePot, addPot, deletePot } from "../../API";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { validationSchema } from "./FormValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import GeneralSection from "./GeneralSection";
import ThrowingSection from "./ThrowingSection";
import TrimmingSection from "./TrimmingSection";
import GlazingSection from "./GlazingSection";
import ResultSection from "./ResultSection";
import ButtonBar from "./ButtonBar";

const PotForm: React.FC<SectionProps> = ({ potInfo, handleChange }) => {
  const navigate = useNavigate();

  const methods = useForm<IPotInfo>({
    mode: "onChange",
    defaultValues: potInfo,
    resolver: yupResolver(validationSchema),
  });

  console.log(methods.getValues());
  console.log(methods.formState.isValid, ": ", methods.formState.errors);
  const handleSavePot = (): void => {
    console.log(methods.getValues());

    updatePot(methods.getValues()).then(
      ({ data: { pot } }: IPotInfo | any) => {}
    );
  };

  const handleAddPot = (): void => {
    console.log(methods.getValues());

    addPot(methods.getValues()).then(({ data: { pot } }: IPotInfo | any) => {
      navigate(`/pot/${pot._id}`);
    });
  };

  const handleDeletePot = (): void => {
    deletePot(potInfo._id).then(({ data: { pot } }: IPotInfo | any) => {
      navigate("/");
    });
  };

  return (
    <div data-testid="pot-form">
      <FormProvider {...methods}>
        <form>
          <GeneralSection
            potInfo={potInfo}
            handleChange={handleChange}
          ></GeneralSection>
          <ThrowingSection
            potInfo={potInfo}
            handleChange={handleChange}
          ></ThrowingSection>
          <TrimmingSection
            potInfo={potInfo}
            handleChange={handleChange}
          ></TrimmingSection>
          <GlazingSection
            potInfo={potInfo}
            handleChange={handleChange}
          ></GlazingSection>
          <ResultSection
            potInfo={potInfo}
            handleChange={handleChange}
          ></ResultSection>
        </form>
      </FormProvider>
      <ButtonBar
        potId={potInfo._id}
        handleAddPot={handleAddPot}
        handleSavePot={handleSavePot}
        handleDeletePot={handleDeletePot}
        handleCancel={() => {
          navigate("/");
        }}
        formIsValid={methods.formState.isValid}
      ></ButtonBar>
    </div>
  );
};

export default PotForm;
