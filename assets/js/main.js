import Timer from "./timer.js";

const hoursContainer = document.querySelector("#timer-hours");
const minutesContainer = document.querySelector("#timer-minutes");

setInterval(() => {
    Timer({hoursContainer, minutesContainer})
});