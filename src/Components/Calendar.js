import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import AddEventModal from "./AddEventModal";
// import axios from "axios";
// import moment from "moment";
// import { response } from "express";
function Calendar() {
  const [modalOpen, setModalOpen] = useState(false);
  // const [events, setEvents] = useState([]);
  const calenderRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = calenderRef.current.getApi();
    calendarApi.addEvent(event);
  };
  // async function handleEventAdd(data) {
  //   await axios.post("/api/calendar/create-event", data.event);
  //   console.log(data.event);
  // }
  // async function handleDateset(data) {
  //   await axios.get(
  //     "/api/calendar/get-events=" +
  //       moment(data.start).toISOString() +
  //       "&ends" +
  //       moment(data.Calendar.toISOString())
  //   );
  // }
  return (
    <section>
      <button onClick={() => setModalOpen(true)}>Add Event</button>
      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          ref={calenderRef}
          // events={events}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </div>

      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={(event) => onEventAdded(event)}
      />
    </section>
  );
}

export default Calendar;
