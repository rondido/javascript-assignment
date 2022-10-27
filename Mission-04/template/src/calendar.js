import useCalculateDate from "./calculateDate.js";

function useCalendar(date) {
  const { getAllDay, getHeader, plusMonthByOne, minusMonthByOne, todayClick,pmDate,thisMonth,nmDate,clickNextDay,clickPrevDay } =
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
  
  // eventText.addEventListener("click", function () {
  //   calendar_header.classList.remove("draw");
  // });

  window.addEventListener("click", (e) => {
    if([calendarHeader,nextDiv,prevDiv,document.querySelector(".calendar-nav")].includes(e.target)){
      return ;
    }
    e.target == eventText
      ? calendar_header.classList.add("draw")
      : calendar_header.classList.remove("draw");
  });
  

  const render = () => {
    const getYear = date.getFullYear();
    const getMonth = date.getMonth();
    const thisMonth = new Date(getYear, getMonth + 1, 0);
    const nmDate = thisMonth.getDate();
    const prevMonth = new Date(getYear, getMonth, 0);               
    const pmDate = prevMonth.getDate(); //이전달
    const pmDay = prevMonth.getDay();
    const nmYear = thisMonth.getFullYear();
    const nmMonth = thisMonth.getMonth();
    const nmDay = thisMonth.getDay(); //이번달 1일
    const span = document.querySelector(".spanday");
    calendarHeader.textContent = getHeader();
    calendarBody.innerHTML = getAllDay()
    .map((value, i) => {  

        const condition =        
          i >= getAllDay().indexOf(1) && i < getAllDay().lastIndexOf(nmDate) + 1
            ? "this" 
            : "other";
        
        return `<div class='dates'><span class='spanday ${condition}' data-day='${value}'>${value}</span></div>`;
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
    getAllDay().forEach((value,i) =>{
      for(let i=0; i< dates.length; i++){
        let targetday;
        dates[i].addEventListener("click", function(e){          
        document.querySelector(".clickEvent")?.classList.remove("clickEvent");
        dates[i].classList.add("clickEvent");
          //이전달
        if(i <= getAllDay().indexOf(1)){
          if(e.target.innerHTML.length < 2 ){
            targetday = "0" + e.target.innerHTML;
          }else{
            targetday = e.target.innerHTML
          }
          eventText.value=clickPrevDay() + targetday;               
        }           
        else if(i < getAllDay().lastIndexOf(nmDate) + 1){
          if(e.target.innerHTML.length < 2 ){
            targetday = "0" + e.target.innerHTML;
          }else{
            targetday = e.target.innerHTML
          }
            eventText.value=todayClick() + targetday;
          }else{
          if(e.target.innerHTML.length < 2 ){
            targetday = "0" + e.target.innerHTML;
          }else{
            targetday = e.target.innerHTML
          }
          eventText.value=clickNextDay() + targetday;
          }
        })         
      }   
    })  
  };  
  render();
}

export default useCalendar;
