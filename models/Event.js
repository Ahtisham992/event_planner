// In-memory event storage
const events = [];

// Create a new event
function createEvent({ userId, name, description, date, category, reminderTime }) {
  const newEvent = {
    id: events.length + 1, // simple ID
    userId,                // should match the user's id
    name,
    description,
    date: new Date(date),
    category,
    reminderTime: new Date(reminderTime),
    isReminderSent: false
  };

  events.push(newEvent);
  return newEvent;
}

// Get all events for a specific user
function getEventsByUser(userId) {
  return events.filter(event => event.userId === userId);
}

// Get upcoming events (for reminder service)
function getUpcomingEvents(currentTime) {
  return events.filter(event =>
    !event.isReminderSent &&
    event.reminderTime <= currentTime
  );
}

// Mark event as reminder sent
function markReminderSent(eventId) {
  const event = events.find(e => e.id === eventId);
  if (event) event.isReminderSent = true;
  return event;
}

module.exports = {
  events,
  createEvent,
  getEventsByUser,
  getUpcomingEvents,
  markReminderSent
};
