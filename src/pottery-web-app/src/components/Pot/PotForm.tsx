import React from "react";
import { updatePot, addPot, deletePot } from "../../API";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { validationSchema } from "./FormValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CancelFormButton,
  CreateFormButton,
  EditFormButtonGroup,
} from "./FormButtons";
import GeneralSection from "./GeneralSection";
import ThrowingSection from "./ThrowingSection";
import TrimmingSection from "./TrimmingSection";
import GlazingSection from "./GlazingSection";
import ResultSection from "./ResultSection";

const PotForm: React.FC<SectionProps> = ({ potInfo, handleChange }) => {
  const navigate = useNavigate();
  //TODO: Add loading visual while loading pot, dissallow data entry while loading
  // Also loaders for saving

  const methods = useForm<IPotInfo>({
    mode: "onChange",
    defaultValues: potInfo,
    resolver: yupResolver(validationSchema),
  });

  //Button Methods
  const handleSavePot = (): void => {
    updatePot(methods.getValues()).then(
      ({ data: { pot } }: IPotInfo | any) => {}
    );
  };

  const handleAddPot = (): void => {
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
      {potInfo._id !== "new" ? (
        <EditFormButtonGroup
          onDeleteClick={handleDeletePot}
          onSaveClick={handleSavePot}
          saveDisabled={!methods.formState.isValid}
        />
      ) : (
        <CreateFormButton
          onClick={handleAddPot}
          disabled={!methods.formState.isValid}
        />
      )}
      <CancelFormButton onClick={() => navigate("/")} />
    </div>
  );
};

export default PotForm;
