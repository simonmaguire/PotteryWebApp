import { fireEvent, render, screen } from "@testing-library/react";
import { BLANK_POT } from "../common/Constants";
import { useForm, FormProvider } from "react-hook-form";
import GeneralSection from "../components/Pottery/GeneralSection";
import ThrowingSection from "../components/Pottery/ThrowingSection";
import TrimmingSection from "../pages/potNotes/TrimmingSection";
import GlazingSection from "../components/Pottery/GlazingSection";
import ResultSection from "../components/Pottery/ResultSection";

const Wrapper = (props: any) => {
  const formMethods = useForm<IPotInfo>();

  return <FormProvider {...formMethods}>{props.children}</FormProvider>;
};

const HANDLE_CHANGE = jest.fn(
  (e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {}
);

describe("General Section tests", () => {
  it("Form Fields are loaded", () => {
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

  it("Each Input can Handle Change", () => {
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

describe("Throwing Section tests", () => {
  it("Form Fields are loaded", () => {
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

    fireEvent.change(throwDate, { target: { value: "6" } });

    expect(HANDLE_CHANGE).toBeCalledTimes(0);

    fireEvent.change(throwDate, { target: { value: "2022-01-01" } });
    expect(HANDLE_CHANGE).toBeCalledTimes(1);
  });
});

describe("Trimming Section tests", () => {
  it("Form Fields are loaded", () => {
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

describe("Glazing Section tests", () => {
  it("Form Fields are loaded", () => {
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

describe("Result Section tests", () => {
  it("Form Fields are loaded", () => {
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
