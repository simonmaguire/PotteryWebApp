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

const PotForm: React.FC<SectionProps> = ({ potInfo }) => {
  const navigate = useNavigate();

  const methods = useForm<IPotInfo>({
    mode: "onChange",
    defaultValues: potInfo,
    resolver: yupResolver(validationSchema),
  });

  console.log(methods.getValues());
  console.log(methods.formState.errors);

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

  const onCreateOrSave = (data: IPotInfo) => {
    if (data._id !== "new") {
      updatePot(data);
    } else {
      addPot(data).then(({ data: { pot } }: IPotInfo | any) => {
        navigate(`/pot/${pot._id}`);
      });
    }
  };

  return (
    <div data-testid="pot-form">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onCreateOrSave)}>
          <GeneralSection potInfo={potInfo}></GeneralSection>
          <ThrowingSection potInfo={potInfo}></ThrowingSection>
          <TrimmingSection potInfo={potInfo}></TrimmingSection>
          <GlazingSection potInfo={potInfo}></GlazingSection>
          <ResultSection potInfo={potInfo}></ResultSection>
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
        </form>
      </FormProvider>
    </div>
  );
};

export default PotForm;
