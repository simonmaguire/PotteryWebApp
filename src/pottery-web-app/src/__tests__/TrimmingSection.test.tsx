import { fireEvent, render, screen } from "@testing-library/react";
import TrimmingSection from "../components/Pot/TrimmingSection";
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
        <TrimmingSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );

    expect(
      screen.getByRole("textbox", { name: /green-decorations/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /trim-notes/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
  });

  it("Each Text Input can Handle Change", () => {
    render(
      <Wrapper>
        <TrimmingSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );
    const greenDecorations = screen.getByRole("textbox", {
      name: /green-decorations/i,
    });
    const trimNotes = screen.getByRole("textbox", { name: /trim-notes/i });

    fireEvent.input(greenDecorations, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(1);

    fireEvent.input(trimNotes, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(2);
  });

  it("Date Input can Handle Change if in ISO", () => {
    render(
      <Wrapper>
        <TrimmingSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );

    const trimDate = screen.getByLabelText("Date");
    fireEvent.input(trimDate, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(0);

    fireEvent.input(trimDate, { target: { value: "2022-01-01" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(1);
  });
});
