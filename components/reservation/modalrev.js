import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "../button";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import { Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { loadDBFirebase } from "../../lib/firebase";
import Complete from "./complete";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: 0
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [complete, setComplete] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [surename, setSureName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [people, setPeople] = useState("");
  const [request, setRequest] = useState("");

  const classes = useStyles();
  const times = [
    "12:00",
    "12:30",
    "13:00",
    "13.30",
    "14:00",
    "14:30",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30"
  ];

  const handleSavetoDB = async event => {
    event.preventDefault();
    let firebase = await loadDBFirebase();
    let refDoc = firebase.firestore().collection("reservation");

    refDoc
      .add({
        name: name,
        surename: surename,
        email: email,
        contact: contact,
        date: selectedDate,
        time: selectedTime,
        people: people,
        request: request,
        confirm: false
      })
      .then(ref => {
        console.log("Document written with ID: ", ref.id);
        handleComplete();
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  const handleTimeChange = event => {
    setSelectedTime(event.target.value);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleClickOpen = event => {
    event.preventDefault();
    setOpen(true);
  };

  const handleComplete = () => {
    setComplete(true);
  };
  const handleClose = () => {
    setOpen(false);
    // setComplete(false);
  };

  return (
    <div>
      <Button
        className={props.class}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        {props.name}
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {complete ? (
          <Complete close={handleClose} />
        ) : (
          <div>
            <DialogTitle id="form-dialog-title">Booking Details</DialogTitle>
            <DialogContent dividers>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
              <form className={classes.root} onSubmit={handleSavetoDB}>
                <Grid container spacing={0}>
                  <Grid item sm={6} xs={12} className={classes.item}>
                    <TextField
                      autoFocus
                      required
                      id="outlined-required"
                      label="Name"
                      type="text"
                      value={name}
                      onChange={event => setName(event.target.value)}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} className={classes.item}>
                    <TextField
                      id="surename"
                      label="Surename"
                      type="text"
                      value={surename}
                      onChange={event => setSureName(event.target.value)}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} className={classes.item}>
                    <TextField
                      required
                      id="email"
                      label="Email Address"
                      type="email"
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} className={classes.item}>
                    <TextField
                      required
                      id="contact"
                      label="Contact Number"
                      variant="outlined"
                      type="number"
                      value={contact}
                      onChange={event => setContact(event.target.value)}
                      InputLabelProps={{
                        shrink: true
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <ContactPhoneIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>

                  <Grid item sm={4} xs={12} className={classes.item}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        required
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date"
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item sm={4} xs={12} className={classes.item}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      required
                      label="Time"
                      value={selectedTime}
                      onChange={handleTimeChange}
                      variant="outlined"
                    >
                      {times.map((option, index) => (
                        <MenuItem value={option} key={index}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item sm={4} xs={12} className={classes.item}>
                    <TextField
                      required
                      id="outlined-number"
                      label="Number of Guest :"
                      type="number"
                      value={people}
                      onChange={event => setPeople(event.target.value)}
                      InputLabelProps={{
                        shrink: true
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.item}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Special Requests :"
                      multiline
                      rows="4"
                      type="text"
                      placeholder="special requirement"
                      variant="outlined"
                      value={request}
                      onChange={event => setRequest(event.target.value)}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </Grid>
                </Grid>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button type="submit" color="primary">
                    Booking
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </div>
        )}
      </Dialog>
    </div>
  );
}
