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
  let bgImage = document.querySelector(".bg-image");
  let quoteElem = document.getElementById("quote");

  // Getting the current date
  let date = new Date();
  let hours = date.getHours();
  let minutes = formatToTwoDigits(date.getMinutes());
  let seconds = formatToTwoDigits(date.getSeconds());
  let format = hours >= 12 ? "PM" : "AM";
  let gradient = "linear-gradient(to bottom, #5c258d, #4389a2)";
  let quote = "Time is what we want most, but what we use worst.";

  // Set quote and gradient based on time of day
  if (hours >= 0 && hours < 6) {
    // Night hours
    quote = "Good night! The stars are the dreams we wish upon.";
    gradient = "linear-gradient(to bottom, #020111, #191970)"; // Midnight blue
  } else if (hours >= 6 && hours < 12) {
    // Morning hours
    quote = "Good morning! Every sunrise is a new opportunity.";
    gradient = "linear-gradient(to bottom, #2193b0, #6dd5ed)"; // Light blue
  } else if (hours >= 12 && hours < 18) {
    // Afternoon hours
    quote = "Good afternoon! Keep pushing forward.";
    gradient = "linear-gradient(to bottom, #e4afcb, #b8cbb8)"; // Light yellow
  } else {
    // Evening hours
    quote = "Good evening! Take time to relax and unwind.";
    gradient = "linear-gradient(to bottom, #4e4376, #2b5876)"; // Twilight blue
  }

  // Convert hours to 12-hour format
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
  if (dayElem && timeElem && dateElem && formatElem && quoteElem && bgImage) {
    dayElem.innerText = date.toLocaleString("en-US", { weekday: "long" });
    timeElem.innerText = formattedTime;
    dateElem.innerText = formattedDate;
    formatElem.innerText = format;
    quoteElem.innerText = quote;
    bgImage.style.backgroundImage = gradient;
  }
};

// Initial update
updateDateTime();

// Set interval to update every second
setInterval(updateDateTime, 1000);
