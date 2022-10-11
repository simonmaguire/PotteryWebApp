import React from "react";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type PotRowProps = {
  pot: IPotInfo;
  handleDelete: (id: string) => void;
};

const PotRow: React.FC<PotRowProps> = (props) => {
  const navigate = useNavigate();

  return (
    <tr aria-label="pot-row">
      <td>{props.pot.name}</td>
      <td>{props.pot.stage}</td>
      <td>{props.pot.clay}</td>
      <td>{props.pot.category}</td>
      <td>
        <BsTrashFill
          role="img"
          aria-label="delete-icon"
          onClick={() => props.handleDelete(props.pot._id)}
        />
        <BsPencilSquare onClick={() => navigate(`/pot/${props.pot._id}`)} />
      </td>
    </tr>
  );
};

export default PotRow;
