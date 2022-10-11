import { fireEvent, render, screen } from "@testing-library/react";
import GlazingSection from "../components/Pot/GlazingSection";
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
        <GlazingSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );

    expect(
      screen.getByRole("textbox", { name: /glazes/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /glaze-notes/i })
    ).toBeInTheDocument();
  });

  it("Each Text Input can Handle Change", () => {
    render(
      <Wrapper>
        <GlazingSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );
    const glazes = screen.getByRole("textbox", {
      name: /glazes/i,
    });
    const glazeNotes = screen.getByRole("textbox", { name: /glaze-notes/i });

    fireEvent.input(glazes, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(1);

    fireEvent.input(glazeNotes, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(2);
  });
});
