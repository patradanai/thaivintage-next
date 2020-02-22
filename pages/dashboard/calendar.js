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
  const url = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const rule = "https://www.googleapis.com/auth/calendar";

  const initClient = event => {
    event.preventDefault();
    gapi.load("client", () => {
      gapi.client
        .init({
          apiKey: GOOGLE_API_KEY,
          clientId: clientId,
          discoveryDocs: url,
          scope: rule
        })
        .then(() => {
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateStatus);
          console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  const listComingEvent = () => {
    gapi.client.calendar.events
      .list({
        calendarId:
          "thaivintagewhitchurch.co.uk_ert6u9r95pcadm2d73fsr1f78k@group.calendar.google.com",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime"
      })
      .then(res => {
        const event = res.result.items;
        if (event.length > 0) {
          console.log(event);
        } else {
          console.log("No event Coming");
        }
      });
  };

  const insertCalendar = () => {
    gapi.client.calendar.events
      .insert({
        calendarId:
          "thaivintagewhitchurch.co.uk_ert6u9r95pcadm2d73fsr1f78k@group.calendar.google.com",
        resource: {
          summary: "Google I/O 2015",
          location: "800 Howard St., San Francisco, CA 94103",
          description:
            "A chance to hear more about Google's developer products.",
          start: {
            dateTime: "2020-02-28T09:00:00-07:00",
            timeZone: "America/Los_Angeles"
          },
          end: {
            dateTime: "2020-02-28T17:00:00-07:00",
            timeZone: "America/Los_Angeles"
          }
        }
      })
      .execute(res => {
        console.log(res);
      });
  };

  const handleAuthSignIn = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleAuthSignOut = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const updateStatus = data => {
    console.log(data);
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
      <button onClick={handleAuthSignIn}>Sign</button>
      <button onClick={handleAuthSignOut}>Sign Out</button>
      <button onClick={listComingEvent}>sync</button>
      <button onClick={insertCalendar}>Insert</button>
    </Dashboard>
  );
};

export default CalendarContent;
