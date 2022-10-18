import { Button } from "react-bootstrap";

interface ICancelButtonProps {
  onClick: () => void;
}

interface ICreateButtonProps {
  onClick: () => void;
  disabled: boolean;
}

interface IDeleteFormButtonProps {
  onDeleteClick: () => void;
}

interface ISaveFormButtonProps {
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
    <Button
      variant="outline-primary"
      // onClick={onClick}
      type="submit"
      disabled={disabled}
    >
      Create
    </Button>
  );
};

export const SaveFormButton = ({
  onSaveClick,
  saveDisabled,
}: ISaveFormButtonProps) => {
  return (
    <Button
      variant="outline-primary"
      // onClick={onSaveClick}
      type="submit"
      disabled={saveDisabled}
    >
      Save
    </Button>
  );
};

export const DeleteFormButton = ({ onDeleteClick }: IDeleteFormButtonProps) => {
  return (
    <Button variant="outline-primary" onClick={onDeleteClick}>
      Delete Pot
    </Button>
  );
};
