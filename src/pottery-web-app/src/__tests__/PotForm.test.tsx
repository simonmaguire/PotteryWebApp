import { render, screen } from "@testing-library/react";
import PotForm from "../components/Pottery/PotForm";
import { BLANK_POT } from "../common/Constants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

describe("Pot Form tests", () => {
  test("cancel button exists", () => {
    render(
      <Router>
        <PotForm potInfo={{ ...BLANK_POT }} handleChange={() => {}} />
      </Router>
    );
    const cancelButton = screen.getByText("Cancel");
    expect(cancelButton).toBeInTheDocument();
  });

  test("create button exists with new pot props", () => {
    render(
      <Router>
        <PotForm
          potInfo={{ ...BLANK_POT, _id: "new" }}
          handleChange={() => {}}
        />
      </Router>
    );
    const createButton = screen.getByText("Create");
    expect(createButton).toBeInTheDocument();
  });

  //TODO: Should be "w/ valid pot _id"
  test("Save/Delete Pot buttons exists w/o new pot _id", () => {
    render(
      <Router>
        <PotForm potInfo={{ ...BLANK_POT }} handleChange={() => {}} />
      </Router>
    );
    const createButton = screen.getByText("Save");
    const deleteButton = screen.getByText("Delete Pot");
    expect(createButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
});
