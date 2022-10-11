import { fireEvent, render, screen } from "@testing-library/react";
import ResultSection from "../components/Pot/ResultSection";
import { BLANK_POT } from "../common/Constants";
import { useForm, FormProvider } from "react-hook-form";

describe("Result Section tests", () => {
  const Wrapper = (props: any) => {
    const formMethods = useForm<IPotInfo>();

    return <FormProvider {...formMethods}>{props.children}</FormProvider>;
  };

  const HANDLE_CHANGE = jest.fn(
    (e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {}
  );

  it("Form data is loaded", () => {
    render(
      <Wrapper>
        <ResultSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );
    expect(
      screen.getByRole("textbox", { name: /result-width/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /result-height/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /result-notes/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
  });

  it("Each Text Input can Handle Change", () => {
    render(
      <Wrapper>
        <ResultSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );
    const resultWidth = screen.getByRole("textbox", { name: /result-width/i });
    const resultHeight = screen.getByRole("textbox", {
      name: /result-height/i,
    });
    const resultNotes = screen.getByRole("textbox", { name: /result-notes/i });

    fireEvent.input(resultWidth, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(1);

    fireEvent.input(resultHeight, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(2);

    fireEvent.input(resultNotes, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(3);
  });

  it("Date Input can Handle Change if in ISO", () => {
    render(
      <Wrapper>
        <ResultSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );

    const resultDate = screen.getByLabelText("Date");
    fireEvent.input(resultDate, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(0);

    fireEvent.input(resultDate, { target: { value: "2022-01-01" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(1);
  });
});
