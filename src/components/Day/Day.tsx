import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from 'antd';
import moment from 'moment';
import classNames from 'classnames';

import { getCountNotesForDay } from '../../utils/utils';
import { toogleDay, toogleNote } from '../../store/actions';
import { AppState } from '../../store/types';
import style from './Day.module.scss';

const { Title } = Typography;

type Props = {
  date: Date;
  activeDay: boolean;
};

const Day = ({ date, activeDay }: Props): React.ReactElement => {
  const dispatch = useDispatch();
  const state = useSelector(({ selectedDay, notes }: AppState) => {
    return { selectedDay, notes };
  });

  const countNotesForDay = useMemo(() => {
    return getCountNotesForDay(state.notes, date);
  }, [state.notes, state.selectedDay]);

  const isToday = useMemo(() => {
    return moment().format('DDMMYYYY') === moment(date).format('DDMMYYYY');
  }, [state.notes, state.selectedDay]);

  const classes = classNames(
    style.container,
    { [style.active]: activeDay && date !== state.selectedDay },
    { [style.selected]: date === state.selectedDay },
    { [style.today]: isToday && date !== state.selectedDay },
  );

  const onDayClick = () => {
    dispatch(toogleDay(date));
    dispatch(toogleNote(null));
  };

  return (
    <div className={classes} onClick={onDayClick}>
      <Title level={5}>{moment(date).format('D')}</Title>
      {countNotesForDay > 0 && (
        <>
          <span className={style.badge}>{countNotesForDay > 9 ? '9+' : countNotesForDay || ''}</span>
        </>
      )}
    </div>
  );
};

export default Day;
