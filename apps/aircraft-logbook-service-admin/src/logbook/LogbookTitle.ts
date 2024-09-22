import { Logbook as TLogbook } from "../api/logbook/Logbook";

export const LOGBOOK_TITLE_FIELD = "id";

export const LogbookTitle = (record: TLogbook): string => {
  return record.id?.toString() || String(record.id);
};
