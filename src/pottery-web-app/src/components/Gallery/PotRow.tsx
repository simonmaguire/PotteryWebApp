import react from "react";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type PotRowProps = {
  pot: IPot;
  handleDelete: (id: string) => void;
};

const PotRow: React.FC<PotRowProps> = (props) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{props.pot.name}</td>
      <td>{props.pot.clay}</td>
      <td>{props.pot.category}</td>
      <td>
        <BsTrashFill onClick={() => props.handleDelete(props.pot._id)} />
        <BsPencilSquare onClick={() => navigate(`/pot/${props.pot._id}`)} />
      </td>
    </tr>
  );
};

export default PotRow;
