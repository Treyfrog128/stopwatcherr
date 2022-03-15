const countDownDate = new Date('Mar 16, 2022 16:37:52').getTime();

setInterval(() => {
  const timeNow = new Date().getTime();
  console.log(countDownDate - timeNow)
}, 1000)
