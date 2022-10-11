import { render, screen } from "@testing-library/react";
import { act } from "react-test-renderer";
import {
  CancelFormButton,
  CreateFormButton,
  EditFormButtonGroup,
} from "../components/Pot/FormButtons";

describe("Pot Button tests", () => {
  describe("Cancel Button", () => {
    it("Cancel Button Renders", () => {
      render(<CancelFormButton onClick={() => {}}></CancelFormButton>);
      const cancelButton = screen.getByText("Cancel");
      expect(cancelButton).toBeInTheDocument();
    });

    it("Cancel Button onClick", () => {
      const CLICK_HANDLER = jest.fn();
      render(<CancelFormButton onClick={CLICK_HANDLER}></CancelFormButton>);
      const cancelButton = screen.getByText("Cancel");
      act(() => {
        cancelButton.click();
      });
      expect(CLICK_HANDLER).toHaveBeenCalled();
    });
  });

  describe("Create Button", () => {
    it("Cancel Button Renders", () => {
      const CLICK_HANDLER = jest.fn();
      render(
        <CreateFormButton
          onClick={CLICK_HANDLER}
          disabled={false}
        ></CreateFormButton>
      );
      const cancelButton = screen.getByText("Create");
      expect(cancelButton).toBeInTheDocument();
    });

    it("Cancel Button onClick", () => {
      const CLICK_HANDLER = jest.fn();
      render(
        <CreateFormButton
          onClick={CLICK_HANDLER}
          disabled={false}
        ></CreateFormButton>
      );
      const cancelButton = screen.getByText("Create");
      act(() => {
        cancelButton.click();
      });
      expect(CLICK_HANDLER).toHaveBeenCalled();
    });

    it("Cancel Button onClick disabled", () => {
      const CLICK_HANDLER = jest.fn();
      render(
        <CreateFormButton
          onClick={CLICK_HANDLER}
          disabled={true}
        ></CreateFormButton>
      );
      const cancelButton = screen.getByText("Create");
      act(() => {
        cancelButton.click();
      });
      expect(CLICK_HANDLER).toHaveBeenCalledTimes(0);
    });
  });

  describe("Edit Button Group", () => {
    it("Edit Button Group Renders", () => {
      const DELETE_CLICK_HANDLER = jest.fn();
      const SAVE_CLICK_HANDLER = jest.fn();

      render(
        <EditFormButtonGroup
          onSaveClick={SAVE_CLICK_HANDLER}
          onDeleteClick={DELETE_CLICK_HANDLER}
          saveDisabled={false}
        ></EditFormButtonGroup>
      );
      const saveButton = screen.getByText("Save");
      const deleteButton = screen.getByText("Delete Pot");
      expect(saveButton).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
    });

    it("Edit Button Group onClicks", () => {
      const DELETE_CLICK_HANDLER = jest.fn();
      const SAVE_CLICK_HANDLER = jest.fn();
      render(
        <EditFormButtonGroup
          onSaveClick={SAVE_CLICK_HANDLER}
          onDeleteClick={DELETE_CLICK_HANDLER}
          saveDisabled={false}
        ></EditFormButtonGroup>
      );
      const saveButton = screen.getByText("Save");
      const deleteButton = screen.getByText("Delete Pot");

      act(() => {
        saveButton.click();
        deleteButton.click();
      });
      expect(SAVE_CLICK_HANDLER).toHaveBeenCalled();
      expect(DELETE_CLICK_HANDLER).toHaveBeenCalled();
    });

    it("Edit Button Group onClicks, save disabled", () => {
      const DELETE_CLICK_HANDLER = jest.fn();
      const SAVE_CLICK_HANDLER = jest.fn();
      render(
        <EditFormButtonGroup
          onSaveClick={SAVE_CLICK_HANDLER}
          onDeleteClick={DELETE_CLICK_HANDLER}
          saveDisabled={true}
        ></EditFormButtonGroup>
      );
      const saveButton = screen.getByText("Save");
      act(() => {
        saveButton.click();
      });
      expect(SAVE_CLICK_HANDLER).toHaveBeenCalledTimes(0);
    });
  });
});
