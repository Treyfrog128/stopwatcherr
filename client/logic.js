const countDownDate = new Date('Mar 16, 2022 16:37:52').getTime();

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
