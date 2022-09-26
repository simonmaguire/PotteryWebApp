import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { updatePot, getPot, deletePot } from "../../API";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { BLANK_POT } from "../../Constants";
import { validationSchema } from "./FormValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPot } from "../../API";
import GeneralSection from "./GeneralSection";
import ThrowingSection from "./ThrowingSection";
import TrimmingSection from "./TrimmingSection";
import GlazingSection from "./GlazingSection";
import ResultSection from "./ResultSection";

const PotForm: React.FC = () => {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);
  //TODO: Add loading visual while loading pot, dissallow data entry while loading
  // Also loaders for saving

  const [potInfo, setPotInfo] = useState<IPotInfo>({
    ...BLANK_POT,
    _id: window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    ),
  });

  const loadPot = (): void => {
    //TODO: Should change condition to also check that its a proper _id
    if (potInfo._id !== "new") {
      getPot(potInfo._id).then(({ data: { pot } }: IPotInfo | any) => {
        setPotInfo(pot);
      });
    } else {
    }
  };
  useEffect(loadPot, []);

  //Button Methods
  const handleSavePot = (): void => {
    updatePot(potInfo).then(({ data: { pot } }: IPotInfo | any) => {});
  };

  const handleAddPot = (): void => {
    addPot(potInfo).then(({ data: { pot } }: IPotInfo | any) => {
      navigate(`/pot/${pot._id}`);
    });
  };

  const handleDeletePot = (): void => {
    deletePot(potInfo._id).then(({ data: { pot } }: IPotInfo | any) => {
      navigate("/");
    });
  };

  const updatePotInfo = (
    ev: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    setPotInfo({ ...potInfo, [ev.target.name]: ev.target.value });
  };

  const methods = useForm<IPotInfo>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: BLANK_POT,
    resolver: yupResolver(validationSchema),
  });

  return (
    <div>
      <Container>
        <FormProvider {...methods}>
          <form>
            <GeneralSection
              potInfo={potInfo}
              handleChange={updatePotInfo}
              // handleSelectChange={updatePotInfoSelect}
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
      </Container>
    </div>
  );
};

export default PotForm;
