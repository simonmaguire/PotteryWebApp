import react from "react";

type PotRowProps = {
  pot: IPot;
};

const PotRow: React.FC<PotRowProps> = (pot) => {
  return (
    <tr>
      <td>{pot.pot._id}</td>
      <td>{pot.pot.lastUpdate}</td>
      <td>{pot.pot.createdOn}</td>
      <td>{pot.pot.category}</td>
    </tr>
  );
};

export default PotRow;
