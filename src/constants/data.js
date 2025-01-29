// Helper function to parse the formatted date string (e.g., "Jan 29, 2025")
export const parseDateString = dateString => {
  const months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
  const [month, day, year] = dateString.split(/[\s,]+/);
  return new Date(year, months[month], day);
};
// Helper function to parse the formatted time string (e.g., "1:00 PM")
export const parseTimeString = timeString => {
  const [time, modifier] = timeString.split(' ');
  let [hours, minutes] = time.split(':');
  if (modifier === 'PM' && hours !== '12') {
    hours = parseInt(hours, 10) + 12;
  }
  if (modifier === 'AM' && hours === '12') {
    hours = '00';
  }
  return new Date(`1970-01-01T${hours}:${minutes}:00`);
};
