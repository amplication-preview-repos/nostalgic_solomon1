import { InputJsonValue } from "../../types";

export type LogEntryCreateInput = {
  description?: string | null;
  fileUpload?: InputJsonValue;
  logDate?: Date | null;
  performedAt?: Date | null;
};
