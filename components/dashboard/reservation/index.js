import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Consumer } from "../../../pages/dashboard/index";
import Typrography from "../../tyrography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import ModalReserve from "./modalReserve";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 700
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: 300
    }
  }
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const mainStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    marginTop: theme.spacing(3)
  },
  margin: {
    margin: theme.spacing(2)
  },
  reservationBox: {
    display: "flex",
    flexWrap: "warp",
    alignItems: "center",
    marginBottom: theme.spacing(3)
  }
}));

const ReserveDashboard = props => {
  const classes = useStyles();
  const styles = mainStyles();

  const rows = [...props.data];
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <React.Fragment>
      <section className={styles.root}>
        <Typrography variant="h4" className={styles.title}>
          Reservation Management
        </Typrography>
        <div className={styles.reservationBox}>
          <Typrography variant="h5" className={styles.title}>
            Reserve Date :
          </Typrography>
          <FormControl className={styles.margin}>
            <InputLabel htmlFor="demo-customized-textbox">Fill Text</InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
          </FormControl>
          <FormControl className={styles.margin}>
            <InputLabel id="demo-customized-select-label">
              Reserve Status
            </InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              input={<BootstrapInput />}
              style={{ width: 200 }}
              placeholder="Reserve Status"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.reservationBox}>
          <Typrography variant="h5" className={styles.title}>
            Reserve Date :
          </Typrography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
              style={{ marginLeft: 30 }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Management</StyledTableCell>
                <StyledTableCell>Reserve No</StyledTableCell>
                <StyledTableCell align="right">Guest Name</StyledTableCell>
                <StyledTableCell align="right">E-Mail</StyledTableCell>
                <StyledTableCell align="right">Contact No.</StyledTableCell>
                <StyledTableCell align="right">Number of Guest</StyledTableCell>
                <StyledTableCell align="right">Reserve Date</StyledTableCell>
                <StyledTableCell align="right">Reserve Time</StyledTableCell>
                <StyledTableCell align="right">Promotion</StyledTableCell>
                <StyledTableCell align="right">Reserve Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    <ModalReserve
                      id={row.id}
                      name={row.name}
                      email={row.email}
                      contact={row.contact}
                      numberGuest={row.guestno}
                      reserveDate={row.reserveDate}
                      reserveTime={row.reserveTime}
                      reserveStatus={row.reserveStatus}
                    />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.contact}</StyledTableCell>
                  <StyledTableCell align="right">{row.guestno}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.reserveDate}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.reserveTime}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.promotion}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.reserveStatus}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </React.Fragment>
  );
};

export default ReserveDashboard;
