import React, { useState } from "react";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import testPic1 from "../../developmentResources/testPic5.jpg";
import DeletePopup from "../../pages/pottery/DeletePopup";

type PotCardProps = {
  pot: IPotInfo;
  handleDelete: (id: string) => void;
};

const PotCard: React.FC<PotCardProps> = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pot-card-container">
      <div className="pot-card">
        <img className="pot-card-pic" src={testPic1} alt="testPic with png" />
        <div className="pot-card-info">
          <h5>{props.pot.name}</h5>
          {props.pot.category && <p>Type: {props.pot.category}</p>}
          {props.pot.stage && <p>Stage: {props.pot.stage}</p>}
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
      <div id="pot-card-actions">
        <BsPencilSquare
          className="pot-action"
          role="img"
          aria-label="edit-icon"
          onClick={() => navigate(`/pottery/${props.pot._id}`)}
        />
        <BsTrashFill
          className="pot-action"
          role="img"
          aria-label="delete-icon"
          onClick={handleShow}
        />
      </div>
    </div>
  );
};

export default PotCard;
