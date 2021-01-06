import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import classNames from 'classnames';

import { toogleDay } from '../../store/actions';
import { AppState } from '../../store/types';
import style from './Day.module.scss';

type Props = {
  date: Date;
  activeDay: boolean;
};

const Day = ({ date, activeDay }: Props): React.ReactElement => {
  const dispatch = useDispatch();
  const pickedDay = useSelector(({ selectedDay }: AppState) => selectedDay);
  const classes = classNames(
    style.container,
    { [style.active]: activeDay && date !== pickedDay },
    { [style.selected]: date === pickedDay },
  );

  const onDayClick = () => {
    dispatch(toogleDay(date));
  };

  return (
    <div className={classes} onClick={onDayClick} data-day={moment(date).format('D')}>
      <span>{moment(date).format('D')}</span>
    </div>
  );
};

export default Day;
