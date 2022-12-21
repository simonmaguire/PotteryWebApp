import { render, screen } from "@testing-library/react";
import { act } from "react-test-renderer";
import PotNotes from "../pages/potNotes/PotContainer";
import Main from "../components/Gallery/main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

describe("Pot Notes tests", () => {
  test("Form data is loading", () => {
    render(
      <Router>
        <PotNotes />
      </Router>
    );
    const loadingMessage = screen.getByText("...Loading");
    expect(loadingMessage).toBeInTheDocument();
  });

  //spent a lot of time trying to get the mock right for
  // useParams so that it
  //   test("Form renders with id=new", () => {
  //
  //     const potForm = screen.getByTestId("pot-form");
  //     expect(potForm).toBeInTheDocument();
  //   });
});
