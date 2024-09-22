import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LogEntryWhereInput = {
  description?: StringNullableFilter;
  fileUpload?: JsonFilter;
  id?: StringFilter;
  logDate?: DateTimeNullableFilter;
  performedAt?: DateTimeNullableFilter;
};
