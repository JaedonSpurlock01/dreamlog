/**
 * Helper function that combines month, day, and year into a readable string. The reasoning for this is that the Date() object in JavaScript does not give a readable formatted date string.
 * @param {number} month The month of the year from 0-11
 * @param {number} day The day from 0-31
 * @param {number} year The year given in XXXX format
 */
export function convertToReadableDate(
  month: number,
  day: number,
  year: number
) {
  const months = [
    "Janurary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[month]} ${day}, ${year}`;
}
