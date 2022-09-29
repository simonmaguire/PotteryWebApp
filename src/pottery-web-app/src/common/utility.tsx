import { DateTime } from "luxon";

//Needed to display in component
// utc added to prevent unexpected off-by 1 dates because of TZ manipulation by luxom
export const dateStringToComponentValue = (dateString: string | undefined) => {
  return dateString !== undefined && dateString !== ""
    ? DateTime.fromISO(dateString, { zone: "utc" }).toISODate()
    : "";
};
