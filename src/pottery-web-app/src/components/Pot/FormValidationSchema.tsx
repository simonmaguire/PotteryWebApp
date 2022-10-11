import * as Yup from "yup";
import { DateTime } from "luxon";

const SHORT_TEXT_MAX = 55;
const LONG_TEXT_MAX = 255;

const LONG_TEXT_MAX_MSG = "Must be at most 255 characters";
const SHORT_TEXT_MAX_MSG = "Must be at most 55 characters";
const POSITIVE_NUMBER = "Must be greater than 0";
const TYPE_NUMBER = "Must be a number";

const FUTURE_DATE_MSG = "Can't be in the future";
const TRIM_AFTER_THROW_MSG = "Can't be before Throw Date";
const RESULT_AFTER_THROW_TRIM_MSG = "Can't be before Throw or Trim Date";

//Sets val to null when it is empty string
//Allowing Yup.number validation on text field because it won't throw and error on ""
const emptyStringTransformNumber = (_: any, val: string) => {
  return val !== "" ? Number(val) : null;
};

const emptyStringTransformDate = (_: any, val: string | undefined) => {
  return val !== "" && val !== undefined
    ? DateTime.fromISO(val).toJSDate()
    : undefined;
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
  throw_date: Yup.date()
    .transform(emptyStringTransformDate)
    .max(DateTime.local().toISODate(), FUTURE_DATE_MSG),
  trim_date: Yup.date()
    .transform(emptyStringTransformDate)
    .max(DateTime.local().toISODate(), FUTURE_DATE_MSG)
    .when("throw_date", (throw_date, schema) =>
      throw_date !== "" && throw_date !== undefined
        ? schema.min(Yup.ref("throw_date"), TRIM_AFTER_THROW_MSG)
        : schema
    ),
  result_date: Yup.date()
    .transform(emptyStringTransformDate)
    .max(DateTime.local(), FUTURE_DATE_MSG)
    .when("throw_date", {
      is: (value: string) => value !== "" && value !== undefined,
      then: Yup.date().min(Yup.ref("throw_date"), RESULT_AFTER_THROW_TRIM_MSG),
    })
    .when("trim_date", {
      is: (value: string) => value !== "" && value !== undefined,
      then: Yup.date().min(Yup.ref("trim_date"), RESULT_AFTER_THROW_TRIM_MSG),
    }),
  clay_weight: Yup.number()
    .typeError(TYPE_NUMBER)
    .transform(emptyStringTransformNumber)
    .positive(POSITIVE_NUMBER)
    .nullable(true),
  result_height: Yup.number()
    .typeError(TYPE_NUMBER)
    .transform(emptyStringTransformNumber)
    .positive(POSITIVE_NUMBER)
    .nullable(true),
  result_width: Yup.number()
    .typeError(TYPE_NUMBER)
    .transform(emptyStringTransformNumber)
    .positive(POSITIVE_NUMBER)
    .nullable(true),
  throw_height: Yup.number()
    .typeError(TYPE_NUMBER)
    .transform(emptyStringTransformNumber)
    .positive(POSITIVE_NUMBER)
    .nullable(true),
  throw_width: Yup.number()
    .typeError(TYPE_NUMBER)
    .transform(emptyStringTransformNumber)
    .positive(POSITIVE_NUMBER)
    .nullable(true),
});
