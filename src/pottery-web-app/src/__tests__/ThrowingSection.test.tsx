import { fireEvent, render, screen } from "@testing-library/react";
import ThrowingSection from "../components/Pot/ThrowingSection";
import { BLANK_POT } from "../common/Constants";
import { useForm, FormProvider } from "react-hook-form";
import { act } from "react-dom/test-utils";

describe("Throwing Section tests", () => {
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
        <ThrowingSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );
    expect(
      screen.getByRole("textbox", { name: /clay-weight/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /throw-width/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /throw-height/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /throw-notes/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
  });

  it("Each Text Input can Handle Change", () => {
    render(
      <Wrapper>
        <ThrowingSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );
    const clayWeight = screen.getByRole("textbox", { name: /clay-weight/i });
    const resultWidth = screen.getByRole("textbox", { name: /throw-width/i });
    const resultHeight = screen.getByRole("textbox", {
      name: /throw-height/i,
    });
    const resultNotes = screen.getByRole("textbox", { name: /throw-notes/i });

    fireEvent.input(clayWeight, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(1);

    fireEvent.input(resultWidth, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(2);

    fireEvent.input(resultHeight, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(3);

    fireEvent.input(resultNotes, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(4);
  });

  it("Date Input can Handle Change if in ISO", () => {
    render(
      <Wrapper>
        <ThrowingSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );

    const throwDate = screen.getByLabelText("Date");
    act(() => {
      fireEvent.change(throwDate, { target: { value: "6" } });
    });
    expect(HANDLE_CHANGE).toBeCalledTimes(0);

    fireEvent.change(throwDate, { target: { value: "2022-01-01" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(1);
  });
});
