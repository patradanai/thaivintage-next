import React, { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import axios from "axios";
import moment from "moment";
const localizer = momentLocalizer(moment);

const CalendarContent = () => {
  const [timeSlots, setTimeSlots] = useState(null);

  const CALENDAR_ID = "info@thaivintagewhitchurch.co.uk";
  const API_KEY = "AIzaSyD29ZH2M8dViEds9L1cJIetRdxFAgiCkhc";
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}`;

  useEffect(() => {
    setTimeSlots([
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]);
  }, []);

  useEffect(() => {
    axios
      .get(url)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  });

  return (
    <Dashboard>
      <Calendar
        localizer={localizer}
        events={timeSlots}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, minWidth: 1000 }}
      />
    </Dashboard>
  );
};

export default CalendarContent;
