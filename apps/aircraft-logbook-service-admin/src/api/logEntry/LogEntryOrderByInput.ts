import { SortOrder } from "../../util/SortOrder";

export type LogEntryOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  fileUpload?: SortOrder;
  id?: SortOrder;
  logDate?: SortOrder;
  performedAt?: SortOrder;
  updatedAt?: SortOrder;
};
