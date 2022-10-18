import { DateTime } from "luxon";

//Needed to display in component
// utc added to prevent unexpected off-by 1 dates because of TZ manipulation by luxom
export const dateStringToComponentValue = (dateString: string | undefined) => {
  return dateString !== undefined && dateString !== ""
    ? DateTime.fromISO(dateString, { zone: "utc" }).toISODate()
    : "";
};

export const initialValuesAsStrings = (pot: IPotInfo) => {
  return {
    ...pot,
    throw_width: pot.throw_width || "",
    throw_height: pot.throw_height || "",
    clay_weight: pot.clay_weight || "",
    result_width: pot.result_width || "",
    result_height: pot.result_height || "",
  };
};
