import React from "react";
import { useState, useEffect } from "react";
import ListView from "./ListView";
import Options from "./options";
import { getPots, deletePot } from "../../API";

const Main: React.FC = () => {
  const [pots, setPots] = useState<IPot[]>([]);

  useEffect(() => {
    fetchPots();
  }, []);

  const fetchPots = (): void => {
    getPots().then(({ data: { pots } }: IPotInfo[] | any) => {
      setPots(pots);
    });
  };

  const handleDeletePot = (_id: string): void => {
    deletePot(_id).then(({ data: { pots } }: IPot[] | any) => {
      setPots(pots);
    });
  };

  return (
    <div id="Main">
      <Options></Options>
      <ListView pots={pots} handleDeletePot={handleDeletePot}></ListView>
    </div>
  );
};

export default Main;
