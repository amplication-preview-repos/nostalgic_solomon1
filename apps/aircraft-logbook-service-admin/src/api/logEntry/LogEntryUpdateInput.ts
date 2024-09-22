import { InputJsonValue } from "../../types";

export type LogEntryUpdateInput = {
  description?: string | null;
  fileUpload?: InputJsonValue;
  logDate?: Date | null;
  performedAt?: Date | null;
};
