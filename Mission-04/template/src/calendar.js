import useCalculateDate from "./calculateDate.js";

function useCalendar(date) {
  const { getAllDay, getHeader, plusMonthByOne, minusMonthByOne, todayClick,pmDate } =
    useCalculateDate(date);

  const calendarHeader = document.querySelector(".header");
  const calendarBody = document.querySelector(".date");

  const prevDiv = document.querySelector(".prevMonth");
  const nextDiv = document.querySelector(".nextMonth");
  const eventText = document.querySelector(".text");
  const calendar_header = document.querySelector(".calender");
  const toFullDay = new Date();
  

  nextDiv.addEventListener("click", function () {
    plusMonthByOne();
    render();
  });

  prevDiv.addEventListener("click", function () {
    minusMonthByOne();
    render();
  });

  eventText.addEventListener("click", function () {
    calendar_header.classList.add("draw");
  });
  calendarBody.addEventListener("click", function (e) {
    e.target.classList.add("day");
    calendar_header.classList.remove("draw");
  });
  calendarBody.addEventListener("click", function (e) {
  });

  // eventText.addEventListener("click", function () {
  //   calendar_header.classList.remove("draw");
  // });

  // window.addEventListener("click", (e) => {
  //   e.target == eventText
  //     ? calendar_header.classList.add("draw")
  //     : calendar_header.classList.remove("draw");
  // });

  const render = () => {
    calendarHeader.textContent = getHeader();
    calendarBody.innerHTML = getAllDay()
      .map((value, i) => {
        let prevflag = true;
        let nextflag = false;
        const getYear = date.getFullYear();
        const getMonth = date.getMonth();
        const thisMonth = new Date(getYear, getMonth + 1, 0);
        const nmDate = thisMonth.getDate();

        if(pmDate == value){
          console.log(
            123
          )
        }
        const condition =
          i >= getAllDay().indexOf(1) && i < getAllDay().lastIndexOf(nmDate) + 1
            ? "this" 
            : "other";

        return `<div class='dates'><span class='spanday ${condition}' >${value}</span></div>`;
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
    const dates = document.querySelectorAll(".dates");
  
    for(let i=0; i< dates.length; i++){
      let targetday;
      dates[i].addEventListener("click", function(e){
        
        document.querySelector(".clickEvent")?.classList.remove("clickEvent");
        dates[i].classList.add("clickEvent");
        if(e.target.innerHTML.length < 2 ){
          targetday = "0" + e.target.innerHTML;
        }else{
          targetday = e.target.innerHTML
        }
        eventText.value=todayClick() + targetday;
      }) 

    }
  };
  
  render();
}

export default useCalendar;
