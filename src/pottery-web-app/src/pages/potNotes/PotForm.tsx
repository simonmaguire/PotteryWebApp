import React, { useState } from "react";
import { updatePot, addPot, deletePot } from "../../API";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { validationSchema } from "./FormValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import GeneralSection from "./parts/formSections/GeneralSection";
import ThrowingSection from "./parts/formSections/ThrowingSection";
import TrimmingSection from "./parts/formSections/TrimmingSection";
import GlazingSection from "./parts/formSections/GlazingSection";
import ResultSection from "./parts/formSections/ResultSection";
import ButtonBar from "./parts/ButtonBar";

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
        navigate(`/pottery/${pot._id}`);
        setLoading(false);
      });
    }
  };

  return (
    <div id="form">
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
              navigate("/pottery");
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
