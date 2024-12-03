import React, { useState, useEffect } from "react";
import "./App.css";

const StreamList = () => {
  // State for managing events
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editEvent, setEditEvent] = useState("");

  // Add Event
  const addEvent = () => {
    if (newEvent.trim() !== "") {
      setEvents([...events, { name: newEvent, watched: false }]);
      setNewEvent("");
    }
  };

  // Delete Event
  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  // Edit Event
  const startEditing = (index) => {
    setEditIndex(index);
    setEditEvent(events[index].name);
  };

  const saveEdit = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].name = editEvent;
    setEvents(updatedEvents);
    setEditIndex(null);
    setEditEvent("");
  };

  // Mark Event as Watched
  const toggleWatched = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].watched = !updatedEvents[index].watched;
    setEvents(updatedEvents);
  };

  const saveEventsToLocalStorage = (events) => {
    localStorage.setItem("userEvents", JSON.stringify(events));
  };

  useEffect(() => {
    const savedEvents = localStorage.getItem("userEvents");
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);
  

  return (
    <div className="app">
      <h1>StreamList</h1>

      {/* Add Event Form */}
      <div className="add-event">
        <input
          type="text"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
          placeholder="Add a new event"
        />
        <button onClick={addEvent}>Add Event</button>
      </div>

      {/* Event List */}
      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index} className={`event-item ${event.watched ? "watched" : ""}`}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editEvent}
                  onChange={(e) => setEditEvent(e.target.value)}
                />
                <button onClick={() => saveEdit(index)}>Save</button>
              </div>
            ) : (
              <div>
                <span>{event.name}</span>
                <button onClick={() => startEditing(index)}>Edit</button>
                <button onClick={() => deleteEvent(index)}>Delete</button>
                <button onClick={() => toggleWatched(index)}>
                  {event.watched ? "Unwatch" : "Watch"}
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamList;
