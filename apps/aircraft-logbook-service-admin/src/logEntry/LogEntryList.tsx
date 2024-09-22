import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LogEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"LogEntries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="fileUpload" source="fileUpload" />
        <TextField label="ID" source="id" />
        <TextField label="logDate" source="logDate" />
        <TextField label="performedAt" source="performedAt" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
