import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";
import Typography from "../../tyrography";
import { loadDBFirebase } from "../../../lib/firebase";
import axios from "axios";
import { useSnackbar } from "notistack";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const ReserveDialogs = props => {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant, data) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`SUCCESS ${data}`, { variant });
  };

  const handleClickOpen = event => {
    event.preventDefault();
    setOpen(true);
  };
  const handleClose = event => {
    event.preventDefault();
    setOpen(false);
  };

  const updateFirebase = async event => {
    event.preventDefault();
    firebaseConfirm();
  };

  // Add Calendar and Confirm
  const firebaseConfirm = async () => {
    const firebase = await loadDBFirebase();
    gapi.client.calendar.events
      .insert({
        calendarId:
          "thaivintagewhitchurch.co.uk_ert6u9r95pcadm2d73fsr1f78k@group.calendar.google.com",
        resource: {
          summary: `${props.name} | ${props.email}`,
          location:
            "Old Mill Park Avenue Park Avenue, Whitchurch SY13 1SH, United Kingdom",
          description: `Name : ${props.name}, Email : ${props.email}, People : ${props.numberGuest}, Remark : ${props.remark} `,
          start: {
            dateTime: `${props.reserveDate}T${props.reserveTime}:00.000Z`,
            timeZone: "Europe/London"
          },
          end: {
            dateTime: `${props.reserveDate}T${props.reserveTime}:00.000Z`,
            timeZone: "Europe/London"
          }
        }
      })
      .then(res => {
        handleClickVariant("success", "ADD CALENDAR");
        firebase
          .firestore()
          .collection("reservation")
          .doc(props.id)
          .update({ confirm: "confirm", calendarId: res.result["id"] })
          .then(res => {
            axios.post("https://thaivintagewhitchurch-268910.appspot.com/api", {
              email: props.email,
              name: props.name,
              people: props.numberGuest,
              timeReserve: props.reserveDate,
              dateReserve: props.reserveTime
            });
          })
          .then(() => {
            handleClickVariant("success", "ACCEPT & EMAIL");
          })
          .catch(err => {
            handleClickVariant("error", "ERROR SYSTEM");
          });
      })
      .catch(err => {
        handleClickVariant("error", "ERROR ADD CALENDAR");
      });
  };

  // Deleted Calendar
  const deleteCalendar = async () => {
    const firebase = await loadDBFirebase();
    gapi.client.calendar.events
      .delete({
        calendarId:
          "thaivintagewhitchurch.co.uk_ert6u9r95pcadm2d73fsr1f78k@group.calendar.google.com",
        eventId: props.calendar
      })
      .then(res => {
        handleClickVariant("warning", "| DELETED");
        firebase
          .firestore()
          .collection("reservation")
          .doc(props.id)
          .update({ confirm: "cancel" })
          .then(() => {
            handleClickVariant("success", "CANCEL A RESERVED");
          })
          .catch(err => {
            handleClickVariant("error", "ERROR SYSTEM");
          });
      });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Reserve Details
        </DialogTitle>
        <DialogContent dividers>
          <TableContainer component={Paper}>
            <Table style={{ width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow></TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Reserve Number</TableCell>
                  <TableCell>{props.id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Guest Name</TableCell>
                  <TableCell>{props.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>E-Mail</TableCell>
                  <TableCell>{props.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Contact Number</TableCell>
                  <TableCell>{props.contact}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Number of Guest</TableCell>
                  <TableCell>{props.numberGuest}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reserve Date</TableCell>
                  <TableCell>{props.reserveDate}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reserve Time</TableCell>
                  <TableCell>{props.reserveTime}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Promotion</TableCell>
                  <TableCell>Promotion</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reserve Status</TableCell>
                  <TableCell>{props.reserveStatus}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Remark</TableCell>
                  <TableCell>{props.remark}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          {props.reserveStatus === "Waiting" ? (
            <div>
              <Button
                autoFocus
                onClick={updateFirebase}
                variant="outlined"
                color="primary"
                style={{
                  backgroundColor: "green",
                  margin: 5
                }}
              >
                Accept
              </Button>
            </div>
          ) : props.reserveStatus === "Confirmed" ? (
            <div>
              <Button
                autoFocus
                onClick={deleteCalendar}
                variant="outlined"
                color="primary"
                style={{
                  backgroundColor: "#f09751",
                  margin: 5
                }}
              >
                Cancel Reserve
              </Button>
            </div>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReserveDialogs;
