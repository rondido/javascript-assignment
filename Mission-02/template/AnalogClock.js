const AnalogClock = ($container) => {
  // do something!
  // 부모
  console.log($container);
  const hour = document.createElement("div");
  const minute = document.createElement("div");
  const second = document.createElement("div");

  hour.classList.add("hand", "hour");
  minute.classList.add("hand", "minute");
  second.classList.add("hand", "second");

  $container.append(hour);
  $container.append(minute);
  $container.append(second);

  for (let i = 1; i <= 12; i++) {
    const time = document.createElement("div");
    time.classList.add("time", `time${i}`);
    time.innerHTML = "|";
    $container.append(time);
  }

  function setDate() {
    const now = new Date();
    const secondsAngle = now.getSeconds() * 6;
    const minsAngle = now.getMinutes() * 6 + secondsAngle / 60;
    const hourAngle = ((now.getHours() % 12) / 12) * 360 + minsAngle / 12;

    hour.style.setProperty("--deg", hourAngle);
    second.style.setProperty("--deg", secondsAngle);
    minute.style.setProperty("--deg", minsAngle);
  }
  setDate();
  setInterval(setDate, 1000);
};

//css 바뀌느냐에 따라 시계가 바뀌는지

export default AnalogClock;
