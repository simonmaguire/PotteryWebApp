import React, { useState } from "react";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../DeletePopup";

type PotRowProps = {
  pot: IPotInfo;
  handleDelete: (id: string) => void;
};

const PotRow: React.FC<PotRowProps> = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pot-row" aria-label="pot-row" role="listitem">
      <div
        id="pot-row-attributes"
        onClick={() => navigate(`/pot/${props.pot._id}`)}
      >
        <p>{props.pot.name}</p>
        <p>{props.pot.category}</p>
        <p>{props.pot.stage}</p>
        <p>{props.pot.clay}</p>
      </div>
      <div id="pot-row-actions">
        <BsTrashFill
          className="pot-action"
          role="img"
          aria-label="delete-icon"
          onClick={handleShow}
        />
        <BsPencilSquare
          className="pot-action"
          role="img"
          aria-label="edit-icon"
          onClick={() => navigate(`/pot/${props.pot._id}`)}
        />
      </div>
      <DeletePopup
        show={show}
        handleClose={handleClose}
        confirmedAction={() => {
          props.handleDelete(props.pot._id);
          handleClose();
        }}
      />
    </div>
  );
};

export default PotRow;
