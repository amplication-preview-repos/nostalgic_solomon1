import { JsonValue } from "type-fest";

export type LogEntry = {
  createdAt: Date;
  description: string | null;
  fileUpload: JsonValue;
  id: string;
  logDate: Date | null;
  performedAt: Date | null;
  updatedAt: Date;
};
