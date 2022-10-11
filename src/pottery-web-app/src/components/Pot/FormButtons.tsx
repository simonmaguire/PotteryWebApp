import { Button } from "react-bootstrap";
import React from "react";

interface ICancelButtonProps {
  onClick: () => void;
}

interface ICreateButtonProps {
  onClick: () => void;
  disabled: boolean;
}

interface IEditFormButtonGroupProps {
  onDeleteClick: () => void;
  onSaveClick: () => void;
  saveDisabled: boolean;
}

export const CancelFormButton = ({ onClick }: ICancelButtonProps) => {
  return (
    <Button variant="outline-primary" onClick={onClick}>
      Cancel
    </Button>
  );
};

export const CreateFormButton = ({ onClick, disabled }: ICreateButtonProps) => {
  return (
    <Button variant="outline-primary" onClick={onClick} disabled={disabled}>
      Create
    </Button>
  );
};

export const EditFormButtonGroup = ({
  onDeleteClick,
  onSaveClick,
  saveDisabled,
}: IEditFormButtonGroupProps) => {
  return (
    <div>
      <Button
        variant="outline-primary"
        onClick={onSaveClick}
        disabled={saveDisabled}
      >
        Save
      </Button>
      <Button variant="outline-primary" onClick={onDeleteClick}>
        Delete Pot
      </Button>
    </div>
  );
};
