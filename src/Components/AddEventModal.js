import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";

function AddEventModal({ isOpen, onClose, onEventAdded }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = (event) => {
    event.preventDefault();
    onEventAdded({ title, start, end });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onclose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <label>Start Date</label>
          <Datetime value={start} onChange={(data) => setStart(data)} />
        </div>
        <div>
          <label>End Date</label>
          <Datetime value={end} onChange={(data) => setEnd(data)} />
        </div>
        <button>Add Event</button>
      </form>
    </Modal>
  );
}

export default AddEventModal;
