import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AircraftList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AircraftItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="manufacturer" source="manufacturer" />
        <TextField label="model" source="model" />
        <TextField label="registrationNumber" source="registrationNumber" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
