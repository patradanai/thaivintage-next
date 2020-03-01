import React, { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import momentTimeZone from "moment-timezone";
momentTimeZone.tz.setDefault("Europe/London");
const localizer = momentLocalizer(momentTimeZone);

const CalendarContent = () => {
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      listComingEvent();
    }, 2000);
  }, []);

  const listComingEvent = () => {
    gapi.client.calendar.events
      .list({
        calendarId:
          "thaivintagewhitchurch.co.uk_ert6u9r95pcadm2d73fsr1f78k@group.calendar.google.com",
        showDeleted: false,
        singleEvents: true,
        orderBy: "startTime"
      })
      .then(res => {
        const event = res.result.items;
        if (event.length > 0) {
          let result = [];
          event.forEach(data => {
            result.push({
              id: data.id,
              start: moment(data.start.dateTime).toDate(),
              end: moment(data.end.dateTime).toDate(),
              title: data.summary
            });
          });
          setTimeSlots(result);
        } else {
          console.log("No event Coming");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <Dashboard>
      <Calendar
        localizer={localizer}
        events={timeSlots}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, minWidth: 1240 }}
      />
    </Dashboard>
  );
};

export default CalendarContent;
