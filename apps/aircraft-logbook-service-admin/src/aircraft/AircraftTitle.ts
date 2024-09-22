import { Aircraft as TAircraft } from "../api/aircraft/Aircraft";

export const AIRCRAFT_TITLE_FIELD = "manufacturer";

export const AircraftTitle = (record: TAircraft): string => {
  return record.manufacturer?.toString() || String(record.id);
};
