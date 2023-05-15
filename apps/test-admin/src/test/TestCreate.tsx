import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Customer" source="customer" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
