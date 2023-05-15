import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TestWhereInput = {
  customer?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
};
