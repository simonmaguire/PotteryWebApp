import { fireEvent, render, screen } from "@testing-library/react";
import ListView from "../components/Gallery/ListView";
import { BrowserRouter as Router } from "react-router-dom";

describe("Pot Form tests", () => {
  test("PotRow exists and delete can be clicked", () => {
    const HANDLE_DELETE = jest.fn();

    const listOfPots: IPot[] = [
      {
        name: "Big Cup",
        clay: "smy",
        stage: "bisque",
        _id: "fakeID",
        category: "cup",
      },
    ];
    render(
      <Router>
        <ListView pots={listOfPots} handleDeletePot={HANDLE_DELETE} />
      </Router>
    );
    const potRows = screen.getAllByRole("listitem", { name: /pot-row/i });
    expect(potRows).toHaveLength(1);

    const editIcon = screen.getByRole("img", { name: /edit-icon/i });
    expect(editIcon).toBeInTheDocument();

    const deleteIcon = screen.getByRole("img", { name: /delete-icon/i });
    fireEvent.click(deleteIcon);
    expect(HANDLE_DELETE).toBeCalledTimes(1);
  });
});
