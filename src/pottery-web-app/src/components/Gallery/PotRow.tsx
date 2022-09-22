import react from "react";
// import { IPot } from "../../types";

type PotRowProps = {
  pot: IPot;
};

const PotRow: React.FC<PotRowProps> = (pot) => {
  return (
    <tr>
      <td>{pot.pot.name}</td>
      <td>{pot.pot.clay}</td>
      <td>{pot.pot.category}</td>
    </tr>
  );
};

export default PotRow;
