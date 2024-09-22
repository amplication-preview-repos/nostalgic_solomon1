import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AircraftWhereInput = {
  id?: StringFilter;
  manufacturer?: StringNullableFilter;
  model?: StringNullableFilter;
  registrationNumber?: StringNullableFilter;
  status?: "Option1";
};
