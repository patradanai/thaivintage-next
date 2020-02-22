import React, { useState, useEffect } from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Consumer } from "../../../pages/dashboard/index";
import Typrography from "../../tyrography";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import DateFnsUtils from "@date-io/date-fns";
import SearchIcon from "@material-ui/icons/Search";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import ModalReserve from "./modalReserve";
import moment from "moment";
import { Button } from "@material-ui/core";
import { CSVLink } from "react-csv";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 12
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
    minWidth: 750
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing(3)
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  headerTable: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    },
    margin: theme.spacing(1)
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  button: {
    marginTop: theme.spacing(3)
  }
}));

const ReserveDashboard = props => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterPayload, setFilterPayload] = useState([]);
  const [statusPayload, setStatusPayload] = useState([]);
  const [csvDownload, setCsvDownload] = useState([]);
  const [clear, setClear] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState("Waiting");
  const classes = useStyles();
  const styles = mainStyles();
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setCsvDownload([...filterPayload]);
  }, [filterPayload]);

  useEffect(() => {
    let filter = [...statusPayload];

    setFilterPayload(
      filter.slice(rowsPerPage * page, rowsPerPage * (page + 1))
    );
  }, [page, rowsPerPage, statusPayload]);

  useEffect(() => {
    const data = [...statusPayload];
    let search = [];
    if (data.length > 0) {
      search = data.filter(data => {
        return (
          data.name.includes(searchValue) ||
          data.email.includes(searchValue) ||
          data.contact.includes(searchValue) ||
          data.reserveDate.includes(searchValue) ||
          data.reserveTime.includes(searchValue)
        );
      });
    }
    // Set for Payload
    setFilterPayload(search);
    // Set fot CSV
    setCsvDownload(search);
  }, [searchValue]);

  useEffect(() => {
    const data = [...statusPayload];
    let filter = [];
    if (data.length > 0 && selectedDate != null) {
      filter = data.filter(data => {
        return (
          data.reserveDate === moment(selectedDate, "llll").format("YYYY-MM-DD")
        );
      });
      // Set for Payload
      setFilterPayload(filter);
      // Set fot CSV
      setCsvDownload(payout);
    }
  }, [selectedDate]);

  useEffect(() => {
    const result = [...props.data];
    let payout = [];
    if (result.length > 0) {
      payout = result.filter(data => {
        return data.reserveStatus.includes(status === "All" ? "" : status);
      });
    }
    // Set for Payload
    setStatusPayload(payout);
    // Set fot CSV
    setCsvDownload(payout);
  }, [status, props.data, clear]);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeStatus = event => {
    event.preventDefault();
    setSelectedDate(null);
    setStatus(event.target.value);
  };

  const handleClearFilter = event => {
    event.preventDefault();
    setSearchValue("");
    setSelectedDate(null);
    setStatus("Waiting");
    setClear(!clear);
  };

  return (
    <React.Fragment>
      <section className={styles.root}>
        <Typrography variant="h4" className={styles.title}>
          Reservation Management
        </Typrography>
        <div className={styles.reservationBox}>
          <Typrography variant="h5" className={styles.title}>
            Reserve Status :
          </Typrography>
          <FormControl className={styles.margin}>
            <InputLabel id="demo-customized-select-label">
              Reserve Status
            </InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              input={<BootstrapInput />}
              style={{ width: 250 }}
              placeholder="Reserve Status"
              value={status}
              onChange={handleChangeStatus}
            >
              <MenuItem value="All">
                <em>All</em>
              </MenuItem>
              <MenuItem value="Waiting">
                <em>Waiting Confirm</em>
              </MenuItem>
              <MenuItem value="Confirmed">
                <em>Confirmed</em>
              </MenuItem>
              <MenuItem value="Cancel">
                <em>Reserve Cancel</em>
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            className={styles.button}
            onClick={handleClearFilter}
          >
            Clear Filter
          </Button>
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
        <Paper className={styles.paper}>
          <div className={styles.headerTable}>
            <div className={styles.headerTitle}>
              <Typrography variant="h4">Thai Vintage Whitchurch</Typrography>
            </div>

            <Button variant="outlined" color="inherit">
              <CSVLink data={csvDownload}>Download CSV</CSVLink>
            </Button>
            <div className={styles.search}>
              <div className={styles.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: styles.inputRoot,
                  input: styles.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
              />
            </div>
          </div>
          <TableContainer>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Management</StyledTableCell>
                  <StyledTableCell>Reserve No</StyledTableCell>
                  <StyledTableCell align="right">Guest Name</StyledTableCell>
                  <StyledTableCell align="right">E-Mail</StyledTableCell>
                  <StyledTableCell align="right">Contact No.</StyledTableCell>
                  <StyledTableCell align="right">Guest No.</StyledTableCell>
                  <StyledTableCell align="right">Reserve Date</StyledTableCell>
                  <StyledTableCell align="right">Reserve Time</StyledTableCell>
                  <StyledTableCell align="right">
                    Reserve Status
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterPayload.map(row => (
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
                        remark={row.request}
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.contact}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.guestno}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.reserveDate}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.reserveTime}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.reserveStatus}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={statusPayload.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </section>
    </React.Fragment>
  );
};

export default ReserveDashboard;
