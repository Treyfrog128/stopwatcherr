const countDownDate = new Date('Mar 16, 2022 16:37:52').getTime();

function countdown(timeStart, timeSetpoint) {
  const timeNow = new Date().getTime();
  return timeStart - timeSetpoint - timeNow;
}

export default countdown;
