import React from "react";
import {
  CancelFormButton,
  CreateFormButton,
  SaveFormButton,
  DeleteFormButton,
} from "./FormButtons";

interface ButtonBarProps {
  potId: string;
  handleDeletePot: () => void;
  handleCancel: () => void;
  formIsValid: boolean;
  loading: boolean;
}

const ButtonBar: React.FC<ButtonBarProps> = ({
  potId,
  handleDeletePot,
  handleCancel,
  formIsValid,
  loading,
}) => {
  return (
    <div id="button-bar">
      {potId !== "new" && (
        <SaveFormButton loading={loading} disabled={!formIsValid} />
      )}
      {potId !== "new" && <DeleteFormButton onClick={handleDeletePot} />}
      {potId === "new" && (
        <CreateFormButton loading={loading} disabled={!formIsValid} />
      )}
      <CancelFormButton onClick={handleCancel} />
    </div>
  );
};

export default ButtonBar;
