// Function to format numbers to two digits
const formatToTwoDigits = (num) => {
  return num < 10 ? "0" + num : num;
};

// Function to update the date and time
const updateDateTime = () => {
  // Getting all elements from the index file
  let dayElem = document.getElementById("day");
  let timeElem = document.getElementById("time");
  let dateElem = document.getElementById("date");
  let formatElem = document.getElementById("format");

  // Getting the current date
  let date = new Date();
  let hours = date.getHours();
  let minutes = formatToTwoDigits(date.getMinutes());
  let seconds = formatToTwoDigits(date.getSeconds());
  let format = hours >= 12 ? "PM" : "AM";

  if (hours > 12) {
    hours -= 12;
  }
  if (hours === 0) {
    hours = 12; // Handle midnight (0 hours should be 12 AM)
  }
  let formattedHours = formatToTwoDigits(hours);
  let formattedTime = `${formattedHours}:${minutes}:${seconds}`;
  let formattedDate = `${date.getDate()} ${date.toLocaleString("en-US", {
    month: "long",
  })} ${date.getFullYear()}`;

  // Updating the elements
  if (dayElem && timeElem && dateElem && formatElem) {
    dayElem.innerText = date.toLocaleString("en-US", { weekday: "long" }); // Full weekday name
    timeElem.innerText = formattedTime;
    dateElem.innerText = formattedDate;
    formatElem.innerText = format;
  }
};

// Initial update
updateDateTime();

// Set interval to update every second
setInterval(updateDateTime, 1000);
