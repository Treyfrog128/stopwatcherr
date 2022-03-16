// main looping function that updates remaining time
export function countdown(timeStart, timeSetpoint) {
  const timeNow = new Date().getTime();
  const daysToExpire = 'Tue, 19 Jan 2038 04:14:07 GMT';
  document.cookie = 'timeStart' + '=' + timeStart + '; expires=' + daysToExpire;
  document.cookie = 'timeSetpoint' + '=' + timeSetpoint + '; expires=' + daysToExpire;
  return timeStart + timeSetpoint - timeNow;
}

// takes in d,h,m,s and converts to ms value for timeSetpoint
export function timeSetpointCalc(days, hours, minutes, seconds) {
  const calcDays = days * 1000 * 60 * 60 * 24;
  const calcHours = hours * 1000 * 60 * 60;
  const calcMinutes = minutes * 1000 * 60;
  const calcSeconds = seconds * 1000;
  return calcDays + calcHours + calcMinutes + calcSeconds;
}

// converts timeRemaining ms value into d,h,m,s for Screen
export function timeCalc(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  const seconds = Math.floor((time % (1000 * 60)) / (1000)).toString().padStart(2, '0');
  return { days, hours, minutes, seconds };
}

// function that gets cookie value based on name
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
