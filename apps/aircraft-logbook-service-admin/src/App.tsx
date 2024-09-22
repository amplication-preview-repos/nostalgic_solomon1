import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AircraftList } from "./aircraft/AircraftList";
import { AircraftCreate } from "./aircraft/AircraftCreate";
import { AircraftEdit } from "./aircraft/AircraftEdit";
import { AircraftShow } from "./aircraft/AircraftShow";
import { ComponentList } from "./component/ComponentList";
import { ComponentCreate } from "./component/ComponentCreate";
import { ComponentEdit } from "./component/ComponentEdit";
import { ComponentShow } from "./component/ComponentShow";
import { LogEntryList } from "./logEntry/LogEntryList";
import { LogEntryCreate } from "./logEntry/LogEntryCreate";
import { LogEntryEdit } from "./logEntry/LogEntryEdit";
import { LogEntryShow } from "./logEntry/LogEntryShow";
import { LogbookList } from "./logbook/LogbookList";
import { LogbookCreate } from "./logbook/LogbookCreate";
import { LogbookEdit } from "./logbook/LogbookEdit";
import { LogbookShow } from "./logbook/LogbookShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"AircraftLogbookService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Aircraft"
          list={AircraftList}
          edit={AircraftEdit}
          create={AircraftCreate}
          show={AircraftShow}
        />
        <Resource
          name="Component"
          list={ComponentList}
          edit={ComponentEdit}
          create={ComponentCreate}
          show={ComponentShow}
        />
        <Resource
          name="LogEntry"
          list={LogEntryList}
          edit={LogEntryEdit}
          create={LogEntryCreate}
          show={LogEntryShow}
        />
        <Resource
          name="Logbook"
          list={LogbookList}
          edit={LogbookEdit}
          create={LogbookCreate}
          show={LogbookShow}
        />
      </Admin>
    </div>
  );
};

export default App;
