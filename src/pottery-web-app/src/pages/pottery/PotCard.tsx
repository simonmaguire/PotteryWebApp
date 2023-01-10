import React, { useState } from "react";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { StringDecoder } from "string_decoder";
import testPic1 from "../../developmentResources/testPic5.jpg";
import DeletePopup from "../../pages/pottery/DeletePopup";
import { formatPotNameForCard } from "./utility/utilityFunctions";

type PotCardProps = {
  pot: IPotInfo;
  handleDelete: (id: string) => void;
};

const PotCard: React.FC<PotCardProps> = (props) => {
  const navigate = useNavigate();
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const handleCloseDeleteWarning = () => setShowDeleteWarning(false);
  const handleShowDeleteWarning = () => setShowDeleteWarning(true);

  const potCardName = props.pot.name
    ? formatPotNameForCard(props.pot.name)
    : props.pot.name;

  return (
    <div className="pot-card-container">
      <div
        className="pot-card"
        onClick={() => navigate(`/pottery/${props.pot._id}`)}
      >
        <img className="pot-card-pic" src={testPic1} alt="testPic with png" />
        <div className="pot-card-info">
          <h5>{potCardName}</h5>
          <p>Type: {props.pot.category}</p>
          <p>Stage: {props.pot.stage}</p>
        </div>
      </div>
      <div id="pot-card-actions">
        <div
          className="pot-action-btn"
          onClick={() => navigate(`/pottery/${props.pot._id}`)}
        >
          <BsPencilSquare
            className="pot-action"
            role="img"
            aria-label="edit-icon"
          />
        </div>
        <div className="pot-action-btn" onClick={handleShowDeleteWarning}>
          <BsTrashFill
            className="pot-action"
            role="img"
            aria-label="delete-icon"
          />
        </div>
      </div>
      <DeletePopup
        show={showDeleteWarning}
        handleClose={handleCloseDeleteWarning}
        confirmedAction={() => {
          props.handleDelete(props.pot._id);
          handleCloseDeleteWarning();
        }}
      />
    </div>
  );
};

export default PotCard;
