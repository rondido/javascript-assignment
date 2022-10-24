/**
 * @param {Date} date
 */
function useCalculateDate(date) {
  function get(date) {
    const getYear = date.getFullYear();
    const getMonth = date.getMonth();

    const toDay = {
      year: date.getFullYear(),
      month: date.toLocaleString("en-US", { month: "short" }),
    };

    const prevMonth = new Date(getYear, getMonth, 0);
    const thisMonth = new Date(getYear, getMonth + 1, 0);

    const pmDate = prevMonth.getDate();
    const pmDay = prevMonth.getDay();

    const nmDate = thisMonth.getDate();
    const nmDay = thisMonth.getDay();

    const prevDates = [];
    const thisDates = [...Array(nmDate + 1).keys()].slice(1);
    const nextDates = [];
    const dates = prevDates.concat(thisDates, nextDates);

    if (pmDay !== 6) {
      for (let i = 0; i < pmDay + 1; i++) {
        prevDates.unshift(pmDate - i);
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
      dates,
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

  return {
    getAllDay,
    getHeader,
    plusMonthByOne,
    minusMonthByOne,
  };
}

export default useCalculateDate;
