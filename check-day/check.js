// check if today is friday
const weekDay = [
  "Suterday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
let day = weekDay[d.getDay()];

if (day === "Friday") {
  console.log("Yes Today Is Friday 🥰");
} else {
  console.log(`No Just Wait 😞 - Today Is ${day}`);
}
