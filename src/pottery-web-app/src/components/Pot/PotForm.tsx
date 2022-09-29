import React from "react";
import { Button } from "react-bootstrap";
import { updatePot, addPot, deletePot } from "../../API";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { validationSchema } from "./FormValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import GeneralSection from "./GeneralSection";
import ThrowingSection from "./ThrowingSection";
import TrimmingSection from "./TrimmingSection";
import GlazingSection from "./GlazingSection";
import ResultSection from "./ResultSection";

const PotForm: React.FC<SectionProps> = ({ potInfo, handleChange }) => {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);
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
    <div>
      <FormProvider {...methods}>
        <form>
          <GeneralSection
            potInfo={potInfo}
            handleChange={handleChange}
            // updateDate={updateDate}

            // handleSelectChange={updatePotInfoSelect}
          ></GeneralSection>
          <ThrowingSection
            potInfo={potInfo}
            handleChange={handleChange}
            // updateDate={updateDate}
          ></ThrowingSection>
          <TrimmingSection
            potInfo={potInfo}
            handleChange={handleChange}
            // updateDate={updateDate}
          ></TrimmingSection>
          <GlazingSection
            potInfo={potInfo}
            handleChange={handleChange}
            // updateDate={updateDate}
          ></GlazingSection>
          <ResultSection
            potInfo={potInfo}
            handleChange={handleChange}
            // updateDate={updateDate}
          ></ResultSection>
        </form>
      </FormProvider>
      <Button variant="outline-primary" onClick={() => navigate("/")}>
        Cancel
      </Button>
      {potInfo._id !== "new" ? (
        <div>
          <Button
            variant="outline-primary"
            onClick={handleSavePot}
            disabled={!methods.formState.isValid}
          >
            Save
          </Button>
          <Button variant="outline-primary" onClick={handleDeletePot}>
            Delete Pot
          </Button>
        </div>
      ) : (
        <div>
          <Button
            variant="outline-primary"
            onClick={handleAddPot}
            disabled={!methods.formState.isValid}
          >
            Create
          </Button>
        </div>
      )}
    </div>
  );
};

export default PotForm;
