import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ListView from "./ListView";
import Options from "./options";
import { getPots, deletePot } from "../../API";

const Main = () => {
  const [pots, setPots] = useState<IPot[]>([]);
  const [loadingPots, setLoadingPots] = useState(true);

  useEffect(() => {
    fetchPots();
  }, []);

  const fetchPots = (): void => {
    getPots(localStorage.getItem("userId")).then(
      ({ data: { pots } }: IPotInfo[] | any) => {
        setPots(pots);
        setLoadingPots(false);
      }
    );
  };

  const handleDeletePot = (_id: string): void => {
    deletePot(_id).then(({ data: { pots } }: IPot[] | any) => {
      setPots(pots);
    });
  };

  return (
    <Container id="Main">
      <Options></Options>
      <ListView
        pots={pots}
        handleDeletePot={handleDeletePot}
        loadingPots={loadingPots}
      ></ListView>
    </Container>
  );
};

export default Main;
