import React from 'react';
import {DAYS, MONTHS, YEARS} from '../../../helpers/constants';

const ValidationDate = ({
    dateTitle,
    day,
    month,
    year,
    changeDayHandler,
    changeMonthHandler,
    changeYearHandler,
    validationMsg
  }) => {
  return (
    <>
      {dateTitle}
      <select
        value={day}
        onChange={({target: {value}}) => changeDayHandler(+value)}
      >
        {DAYS.map((day) => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
      <select
        value={month}
        onChange={({target: {value}}) => changeMonthHandler(+value)}
      >
        {MONTHS.map((month, i) => (
          <option key={month} value={i}>{month}</option>
        ))}
      </select>
      <select
        value={year}
        onChange={({target: {value}}) => changeYearHandler(+value)}
      >
        {YEARS.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <span>{validationMsg && <span style={{color: 'red'}}>{validationMsg}</span>}</span>
      <br/>
    </>
  );
}

export default React.memo(ValidationDate);