import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const LogEntryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <DateTimeInput label="logDate" source="logDate" />
        <DateTimeInput label="performedAt" source="performedAt" />
      </SimpleForm>
    </Edit>
  );
};
