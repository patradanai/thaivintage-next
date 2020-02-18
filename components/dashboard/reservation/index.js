import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Consumer } from "../../../pages/dashboard/index";

const ReserveDashboard = props => {
  const columns = [
    "Reserve No",
    "Guest Name",
    "E-mail",
    "Contact No",
    "Number of Guest",
    "Reserve Date",
    "Reserve Time",
    "Promotion",
    "Reserve Status"
  ];

  const options = {
    filterType: "checkbox",
    onCellClick: (cellData, cellMeta) => {
      console.log(cellData, cellMeta);
      alert("ERR");
    }
  };
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "#fff"
          }
        }
      }
    });
  return (
    <Consumer>
      {data => (
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Reservation List"}
            data={data.payload}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      )}
    </Consumer>
  );
};

export default ReserveDashboard;
