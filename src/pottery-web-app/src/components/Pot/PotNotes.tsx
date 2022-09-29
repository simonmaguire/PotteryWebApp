import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getPot } from "../../API";
import { BLANK_POT } from "../../Constants";
import PotForm from "./PotForm";

const PotNotes: React.FC = () => {
  // const [loading, setLoading] = useState(true);
  //TODO: Add loading visual while loading pot, dissallow data entry while loading
  // Also loaders for saving

  const [isLoading, setIsLoading] = useState<boolean>(true);
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
        setIsLoading(false);
      });
    } else {
    }
  };
  useEffect(loadPot, []);

  //Update methods
  const updatePotInfo = (
    ev: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    setPotInfo({ ...potInfo, [ev.target.name]: ev.target.value });
  };

  // const updateDate = (ev: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(ev.target.name);

  //   console.log(ev.target.value);

  //   let updatedDT = DateTime.fromISO(ev?.target.value).toJSDate();
  //   console.log(updatedDT);
  //   setPotInfo({ ...potInfo, [ev.target.name]: ev.target.value });
  // };

  return (
    <div>
      <Container>
        {isLoading ? (
          <div>...Loading</div>
        ) : (
          <PotForm potInfo={potInfo} handleChange={updatePotInfo} />
        )}
      </Container>
    </div>
  );
};

export default PotNotes;
