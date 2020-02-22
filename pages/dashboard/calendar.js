import React, { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import axios from "axios";
import moment from "moment";
const localizer = momentLocalizer(moment);

const CalendarContent = () => {
  const [timeSlots, setTimeSlots] = useState(null);
  const CALENDAR_ID = "sqm2udi1adf6ds7gj9h81tuet8@group.calendar.google.com";
  const clientId =
    "468408425438-obcg1t2i7tbgh1089avslst12k5bs7vt.apps.googleusercontent.com";
  const GOOGLE_API_KEY = "AIzaSyBhH47ELc9gEXMVlraQSskoV7X7_01Dn_Q";
  const url = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
  const rule = "https://www.googleapis.com/auth/calendar.readonly";

  const initClient = () => {
    gapi.load("client", () => {
      gapi.client
        .init({ apiKey: GOOGLE_API_KEY })
        .then(() => {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?maxResults=11&orderBy=updated&timeMin=${moment().toISOString()}&timeMax=${moment()
              .endOf("day")
              .toISOString()}`
          });
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    setTimeSlots([
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]);
  }, []);

  return (
    <Dashboard>
      <Calendar
        localizer={localizer}
        events={timeSlots}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, minWidth: 1000 }}
      />
      <button onClick={initClient}>Sign In</button>
    </Dashboard>
  );
};

export default CalendarContent;
