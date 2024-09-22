import { LogEntry as TLogEntry } from "../api/logEntry/LogEntry";

export const LOGENTRY_TITLE_FIELD = "id";

export const LogEntryTitle = (record: TLogEntry): string => {
  return record.id?.toString() || String(record.id);
};
