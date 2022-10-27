/**
 * @param {Date} date
 */

function useCalculateDate(date) {
  function get(date) {
    const getYear = date.getFullYear();
    const getMonth = date.getMonth();

    // 캘린더 위에 있는 년 월
    const toDay = {
      year: date.getFullYear(),
      month: date.toLocaleString("en-US", { month: "short" }),
    };

    // 현재 클릭한 날짜
    const clickDay = {
      year: date.getFullYear(),
      
      month: date.getMonth() + 1
      
    }
    const clickPrevDay = {
      year: date.getFullYear(),
      month : date.getMonth()
    }
    const clickNextDay = {
      year: date.getFullYear(),
      month : date.getMonth() + 2
    }
    const prevMonth = new Date(getYear, getMonth, 0); //이전달
    const thisMonth = new Date(getYear, getMonth + 1, 0); // 현재 년월일
 
      
    const pmDate = prevMonth.getDate();
    const pmDay = prevMonth.getDay();
    const nmYear = thisMonth.getFullYear();
    const nmMonth = thisMonth.getMonth();
    const nmDate = thisMonth.getDate();
    const nmDay = thisMonth.getDay();
    
    const prevDates = [];
    const thisDates = [...Array(nmDate + 1).keys()].slice(1); //일만 가져옴
    const nextDates = [];
   
    
    if (pmDay !== 6) {
      for (let i = 0; i < pmDay + 1; i++) {
        prevDates.unshift(pmDate - i) ;
      }
    }

    for (let i = 1; i < 7 - nmDay; i++) {
      nextDates.push(i);
    }

    return {
      prevDates,
      nextDates,
      thisDates,
      toDay,
      clickDay,
      pmDate,
      thisMonth,
      nmDate,
      clickPrevDay,
      clickNextDay
    };
  }
  

  const getAllDay = () => {
    const { prevDates, thisDates, nextDates } = get(date);
    return prevDates.concat(thisDates, nextDates);
  };

  const minusMonthByOne = () => {
    date.setMonth(date.getMonth() - 1);
  };
  const plusMonthByOne = () => {
    date.setMonth(date.getMonth() + 1);
  };
  const getHeader = () => {
    const { toDay } = get(date);
    return `${toDay.year} ${toDay.month}`;
  };
 //현재 달 클릭
  const todayClick = () => {
    const {clickDay} = get(date);
    if(clickDay.month <10){
      clickDay.month = "0" + clickDay.month
    }
    return `${clickDay.year}-${clickDay.month}-`
  };
  const clickPrevDay = () =>{
    const {clickPrevDay} = get(date);
    if(clickPrevDay.month <10){
      clickPrevDay.month = "0" + clickPrevDay.month
    }
    return `${clickPrevDay.year}-${clickPrevDay.month}-`
  };

  const clickNextDay = () =>{
    const {clickNextDay} = get(date);
    if(clickNextDay.month <10){
      clickNextDay.month = "0" + clickNextDay.month
    }
    return `${clickNextDay.year}-${clickNextDay.month}-`
  };
  
  

  return {
    getAllDay,
    getHeader,
    plusMonthByOne,
    minusMonthByOne,
    todayClick,
    clickPrevDay,
    clickNextDay
  };
}

export default useCalculateDate;
