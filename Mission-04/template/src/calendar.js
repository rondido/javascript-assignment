import useCalculateDate from "./calculateDate.js";

function useCalendar(date) {
  const { getAllDay, getHeader, plusMonthByOne, minusMonthByOne } =
    useCalculateDate(date);

  const calendarHeader = document.querySelector(".header");
  const calendarBody = document.querySelector(".date");

  const prevDiv = document.querySelector(".prevMonth");
  const nextDiv = document.querySelector(".nextMonth");

  const toFullDay = new Date();
  const clickDay = document.querySelector(".date");

  clickDay.addEventListener("click", function () {});
  nextDiv.addEventListener("click", function () {
    plusMonthByOne();
    render();
  });

  prevDiv.addEventListener("click", function () {
    minusMonthByOne();
    render();
  });

  const render = () => {
    calendarHeader.textContent = getHeader();
    calendarBody.innerHTML = getAllDay()
      .map((date, i) => {
        const date3 = new Date();
        const getYear = date3.getFullYear();
        const getMonth = date3.getMonth();
        const thisMonth = new Date(getYear, getMonth + 1, 0);
        const nmDate = thisMonth.getDate();
        const condition =
          i >= getAllDay().indexOf(1) && i <= getAllDay().lastIndexOf(nmDate)
            ? "this"
            : "other";
        return `<div class='dates'><span class=${condition}>${date}</span></div>`;
      })
      .join("");

    if (
      date.getMonth() === toFullDay.getMonth() &&
      date.getFullYear() === toFullDay.getFullYear()
    ) {
      for (let date of document.querySelectorAll(".this")) {
        if (+date.innerText === toFullDay.getDate()) {
          date.classList.add("today");
          break;
        }
      }
    }
  };
  render();
}

export default useCalendar;
