import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ComponentWhereInput = {
  id?: StringFilter;
  installedDate?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  serialNumber?: StringNullableFilter;
  status?: "Option1";
};
