const countDownDate = new Date('Mar 16, 2022 16:37:52').getTime();

function timeRemaining() {
  const timeNow = new Date().getTime();
  return countDownDate - timeNow;
}

export default timeRemaining;
