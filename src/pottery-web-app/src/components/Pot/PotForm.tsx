import React, { useState } from "react";
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

interface IPotFormProps {
  potInfo: IPotInfo;
  setIdAfterSave: (id: string) => void;
}

const PotForm: React.FC<IPotFormProps> = ({ potInfo, setIdAfterSave }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const methods = useForm<IPotInfo>({
    mode: "onChange",
    defaultValues: potInfo,
    resolver: yupResolver(validationSchema),
  });

  const handleDeletePot = (): void => {
    deletePot(potInfo._id).then(({ data: { pot } }: IPotInfo | any) => {
      navigate("/");
    });
  };

  const onCreateOrSave = (data: IPotInfo) => {
    setLoading(true);
    if (data._id !== "new") {
      updatePot(data).then(() => setLoading(false));
    } else {
      addPot(data).then(({ data: { pot } }: IPotInfo | any) => {
        setIdAfterSave(pot._id);
        navigate(`/pot/${pot._id}`);
        setLoading(false);
      });
    }
  };

  return (
    <div data-testid="pot-form">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onCreateOrSave)}>
          <GeneralSection />
          <ThrowingSection />
          <TrimmingSection />
          <GlazingSection />
          <ResultSection />
          <ButtonBar
            potId={potInfo._id}
            handleDeletePot={handleDeletePot}
            handleCancel={() => {
              navigate("/");
            }}
            formIsValid={methods.formState.isValid}
            loading={loading}
          ></ButtonBar>
        </form>
      </FormProvider>
    </div>
  );
};

export default PotForm;
