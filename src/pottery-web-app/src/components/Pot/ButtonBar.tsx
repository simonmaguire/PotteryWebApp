import React from "react";
import {
  CancelFormButton,
  CreateFormButton,
  SaveFormButton,
  DeleteFormButton,
} from "./FormButtons";

interface ButtonBarProps {
  potId: string;
  handleSavePot: () => void;
  handleAddPot: () => void;
  handleDeletePot: () => void;
  handleCancel: () => void;
  formIsValid: boolean;
}

const ButtonBar: React.FC<ButtonBarProps> = ({
  potId,
  handleSavePot,
  handleDeletePot,
  handleAddPot,
  handleCancel,
  formIsValid,
}) => {
  return (
    <div id="button-bar">
      {potId !== "new" && (
        <SaveFormButton
          onSaveClick={handleSavePot}
          saveDisabled={!formIsValid}
        />
      )}
      {potId !== "new" && <DeleteFormButton onDeleteClick={handleDeletePot} />}
      {potId === "new" && (
        <CreateFormButton onClick={handleAddPot} disabled={!formIsValid} />
      )}
      <CancelFormButton onClick={handleCancel} />
    </div>
  );
};

export default ButtonBar;
