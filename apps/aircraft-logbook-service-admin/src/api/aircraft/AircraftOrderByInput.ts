import { SortOrder } from "../../util/SortOrder";

export type AircraftOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  manufacturer?: SortOrder;
  model?: SortOrder;
  registrationNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
