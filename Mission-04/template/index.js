const date = new Date();

const renderCalender = () => {
  const getYear = date.getFullYear();
  const getMonth = date.getMonth();

  const toDay = {
    year: date.getFullYear(),
    month: date.toLocaleString("en-US", { month: "short" }),
  };

  document.querySelector(
    ".header"
  ).textContent = `${toDay.year} ${toDay.month}`;

  //마지막날
  const prevMonth = new Date(getYear, getMonth, 0);
  const thisMonth = new Date(getYear, getMonth + 1, 0);

  const pmDate = prevMonth.getDate();
  const pmDay = prevMonth.getDay();

  const nmDate = thisMonth.getDate();
  const nmDay = thisMonth.getDay();

  const prevDates = [];
  const thisDates = [...Array(nmDate + 1).keys()].slice(1);
  const nextDates = [];

  if (pmDay !== 6) {
    for (let i = 0; i < pmDay + 1; i++) {
      prevDates.unshift(pmDate - i);
    }
  }

  for (let i = 1; i < 7 - nmDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);

  dates.forEach((date, i) => {
    dates[i] = `<div class="dates">${date}</div>`;
  });

  document.querySelector(".date").innerHTML = dates.join("");
};

renderCalender();

const nav = document.querySelector(".calendar-nav");
const prevDiv = document.createElement("div");
const nextDiv = document.createElement("div");
prevDiv.classList.add("btn", "prevMonth"); // div
nextDiv.classList.add("btn", "nextMonth"); // div
nav.append(prevDiv);
nav.append(nextDiv);

function moveNextMonth() {
  date.setMonth(date.getMonth() - 1);
}
function movePrevMonth() {
  date.setMonth(date.getMonth() + 1);
}

nextDiv.addEventListener("click", function () {
  moveNextMonth();
  renderCalender();
});

prevDiv.addEventListener("click", function () {
  movePrevMonth();
  renderCalender();
});
