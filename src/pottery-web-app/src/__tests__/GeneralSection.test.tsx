import { fireEvent, render, screen } from "@testing-library/react";
import GeneralSection from "../components/Pot/GeneralSection";
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
        <GeneralSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );

    expect(
      screen.getByRole("combobox", { name: /stage/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /clay/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: /category/i })
    ).toBeInTheDocument();
  });

  it("Each Text Input can Handle Change", () => {
    render(
      <Wrapper>
        <GeneralSection potInfo={BLANK_POT} handleChange={HANDLE_CHANGE} />
      </Wrapper>
    );
    const stage = screen.getByRole("combobox", {
      name: /stage/i,
    });
    const clay = screen.getByRole("textbox", { name: /clay/i });
    const name = screen.getByRole("textbox", { name: /name/i });
    const category = screen.getByRole("combobox", {
      name: /category/i,
    });

    fireEvent.change(stage, { target: { value: "Wet" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(1);

    fireEvent.input(clay, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(2);

    fireEvent.input(name, { target: { value: "6" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(3);

    fireEvent.change(category, { target: { value: "Mug" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(4);
  });
});
