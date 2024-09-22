import { SortOrder } from "../../util/SortOrder";

export type ComponentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  installedDate?: SortOrder;
  name?: SortOrder;
  serialNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
