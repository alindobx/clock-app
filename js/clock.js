
const convertTime = (hour) => {
  if (hour >= 12) {
    return hour - 12;
  } else if (hour === 0) {
    return 12;
  } else {
    return hour;
  }
};

const amPm = hour => {
  return hour >= 12 ? "pm" : "am";
};

const formatDigit = digit => {
  if (digit < 10) {
    return 0;
  } else {
    return "";
  }
};

const displayDay = (date) => {
  const daysOfweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const day = date.getDay();
  const weekMatch = daysOfweek[day];
  document.getElementById("days-weeks").innerHTML = `${weekMatch}`;
};
const displayDate = (date) => {
  const months = [
    "January",
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
    "December"
  ];
  const year = date.getFullYear();
  const dayNumber = date.getDate();
  const month = date.getMonth();
  const match = months[month];
  document.getElementById("monthDate").innerHTML = `${match} ${dayNumber}, ${year}`;
};
const displayTime =(date) =>{
  const hour = date.getHours();
  const seconds = date.getSeconds();
  const minute = date.getMinutes();
  const nightOrDay = amPm(hour);
  const firstDigitSec = formatDigit(seconds);
  const firstDigitMin = formatDigit(minute);
  //store conversion in a variable standardTime
  const standardTime = convertTime(hour);
  document.getElementById("hour").innerHTML = `${standardTime}`;
  document.getElementById("military").innerHTML = `${hour}`;
  document.getElementById("minute").innerHTML = `: ${firstDigitMin}${minute}`;
  document.getElementById("seconds").innerHTML = `: ${firstDigitSec}${seconds} ${nightOrDay}`;
};

function myTime() {

  const date = new Date();

  displayTime(date);
  displayDay(date);
  displayDate(date);
}

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("military").classList.toggle("hide");
  document.getElementById("hour").classList.toggle("hide");
  btn.innerHTML = btn.innerHTML === "Military Time"
      ? "Standard Time"
      : "Military Time";
});

myTime();

setInterval(myTime, 1000);
