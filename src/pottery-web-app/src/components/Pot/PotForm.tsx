import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { updatePot, getPot, deletePot } from "../../API";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { BLANK_POT } from "../../Constants";
import { validationSchema } from "./FormValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPot } from "../../API";
import { DateTime } from "luxon";
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
        console.log(pot);
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

  //Update methods
  const updatePotInfo = (
    ev: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    console.log(ev.target.value);

    setPotInfo({ ...potInfo, [ev.target.name]: ev.target.value });
  };

  // const updateDate = (ev: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(ev.target.name);

  //   console.log(ev.target.value);

  //   let updatedDT = DateTime.fromISO(ev?.target.value).toJSDate();
  //   console.log(updatedDT);
  //   setPotInfo({ ...potInfo, [ev.target.name]: ev.target.value });
  // };

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
              // updateDate={updateDate}

              // handleSelectChange={updatePotInfoSelect}
            ></GeneralSection>
            <ThrowingSection
              potInfo={potInfo}
              handleChange={updatePotInfo}
              // updateDate={updateDate}
            ></ThrowingSection>
            <TrimmingSection
              potInfo={potInfo}
              handleChange={updatePotInfo}
              // updateDate={updateDate}
            ></TrimmingSection>
            <GlazingSection
              potInfo={potInfo}
              handleChange={updatePotInfo}
              // updateDate={updateDate}
            ></GlazingSection>
            <ResultSection
              potInfo={potInfo}
              handleChange={updatePotInfo}
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
      </Container>
    </div>
  );
};

export default PotForm;
