export function countdown(timeStart, timeSetpoint) {
  const timeNow = new Date().getTime();
  return timeStart + timeSetpoint - timeNow;
}

export function timeSetpointCalc(days, hours, minutes, seconds) {
  const calcDays = days * 1000 * 60 * 60 * 24;
  const calcHours = hours * 1000 * 60 * 60;
  const calcMinutes = minutes * 1000 * 60;
  const calcSeconds = seconds * 1000;
  return calcDays + calcHours + calcMinutes + calcSeconds;
}

export function timeCalc(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / (1000));
  return { days, hours, minutes, seconds };
}
console.log(timeCalc(356499326))