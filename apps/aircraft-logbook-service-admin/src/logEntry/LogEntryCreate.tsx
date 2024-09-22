import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const LogEntryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <DateTimeInput label="logDate" source="logDate" />
        <DateTimeInput label="performedAt" source="performedAt" />
      </SimpleForm>
    </Create>
  );
};
