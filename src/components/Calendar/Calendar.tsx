import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/types';

import { getDaysForCalendar } from '../../utils/utils';
import Day from '../Day/Day';
import style from './Calendar.module.scss';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Calendar = (): React.ReactElement => {
  const state = useSelector(({ selectedMonthNumber, selectedMonth }: AppState) => {
    return { selectedMonthNumber, selectedMonth };
  });

  const days = useMemo(() => {
    return getDaysForCalendar(state.selectedMonth);
  }, [state.selectedMonth]);

  return (
    <>
      <div className={style.header}>
        {daysOfWeek.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className={style.container}>
        {days.map((day) => {
          const isMonthActive = day.getMonth() === state.selectedMonth.month();

          return <Day date={day} activeDay={isMonthActive} key={day.toLocaleString()} />;
        })}
      </div>
    </>
  );
};

export default Calendar;
