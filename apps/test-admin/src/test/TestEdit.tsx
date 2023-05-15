import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Customer" source="customer" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
