import React from "react";
import { useState, useEffect } from "react";
import ListView from "./ListView";
import Options from "./options";
import { getPots } from "../API";

const Main: React.FC = () => {
  const [pots, setPots] = useState<IPot[]>([]);

  useEffect(() => {
    fetchPots();
  }, []);

  const fetchPots = (): void => {
    getPots().then(({ data: { pots } }: IPot[] | any) => {
      console.log(pots);
      setPots(pots);
    });
  };

  return (
    <div id="Main">
      <Options></Options>
      <ListView pots={pots}></ListView>
    </div>
  );
};

export default Main;
