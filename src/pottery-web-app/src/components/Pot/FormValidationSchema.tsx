import * as Yup from "yup";

const SHORT_TEXT_MAX = 55;
const LONG_TEXT_MAX = 255;

const LONG_TEXT_MAX_MSG = "Must be at most 255 characters";
const SHORT_TEXT_MAX_MSG = "Must be at most 55 characters";
const POSITIVE_NUMBER = "Must be greater than 0";
const TYPE_NUMBER = "Must be a number";

//Sets val to null when it is empty string
//Allowing Yup.number validation on text field because it won't throw and error on ""
const emptyStringTransform = (_: any, val: string) => {
  return val !== "" ? Number(val) : null;
};

export const validationSchema = Yup.object().shape({
  clay: Yup.string().max(SHORT_TEXT_MAX, SHORT_TEXT_MAX_MSG),
  glazes: Yup.string().max(SHORT_TEXT_MAX, SHORT_TEXT_MAX_MSG),
  glaze_notes: Yup.string().max(LONG_TEXT_MAX, LONG_TEXT_MAX_MSG),
  green_decorations: Yup.string().max(SHORT_TEXT_MAX, SHORT_TEXT_MAX_MSG),
  name: Yup.string().max(SHORT_TEXT_MAX, SHORT_TEXT_MAX_MSG),
  result_notes: Yup.string().max(LONG_TEXT_MAX, LONG_TEXT_MAX_MSG),
  throw_notes: Yup.string().max(LONG_TEXT_MAX, LONG_TEXT_MAX_MSG),
  trim_notes: Yup.string().max(LONG_TEXT_MAX, LONG_TEXT_MAX_MSG),
  clay_weight: Yup.number()
    .typeError(TYPE_NUMBER)
    .transform(emptyStringTransform)
    .positive(POSITIVE_NUMBER)
    .nullable(true),
  result_height: Yup.number()
    .typeError(TYPE_NUMBER)
    .transform(emptyStringTransform)
    .positive(POSITIVE_NUMBER)
    .nullable(true),
  result_width: Yup.number()
    .typeError(TYPE_NUMBER)
    .transform(emptyStringTransform)
    .positive(POSITIVE_NUMBER)
    .nullable(true),
  throw_height: Yup.number()
    .typeError(TYPE_NUMBER)
    .transform(emptyStringTransform)
    .positive(POSITIVE_NUMBER)
    .nullable(true),
  throw_width: Yup.number()
    .typeError(TYPE_NUMBER)
    .transform(emptyStringTransform)
    .positive(POSITIVE_NUMBER)
    .nullable(true),
});
