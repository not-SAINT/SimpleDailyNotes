import { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, DatePicker } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { AppActionTypes, AppState } from '../../store/types';
import { decrementMonth, incrementMonth, resetDay, tooglePeriod } from '../../store/actions';
import style from './Navigation.module.scss';

const { RangePicker } = DatePicker;
const DATE_FORMAT = 'DD-MM-YYYY';

type EventValue<DateType> = DateType | null;
type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;

const Navigation = (): React.ReactElement => {
  const state = useSelector(({ selectedMonth, selectedPeriod }: AppState) => {
    return { selectedMonth, selectedPeriod };
  });
  const dispatch = useDispatch<Dispatch<AppActionTypes>>();

  const onDecrementClick = () => {
    dispatch(decrementMonth());
  };

  const onIncrementClick = () => {
    dispatch(incrementMonth());
  };

  const onPeriodSelected = (dates: RangeValue<moment.Moment>) => {
    if (dates) {
      dispatch(resetDay());
      return dispatch(tooglePeriod(dates as moment.Moment[]));
    }

    return dispatch(tooglePeriod(null));
  };

  return (
    <>
      <div className={style.container}>
        <Button shape="circle" icon={<LeftOutlined />} onClick={onDecrementClick} />
        <h3 className={style.period}>{state.selectedMonth.format('MMMM YYYY')}</h3>
        <Button shape="circle" icon={<RightOutlined />} onClick={onIncrementClick} />
      </div>
      <div className={style.container}>
        <RangePicker onChange={onPeriodSelected} format={DATE_FORMAT} />
      </div>
    </>
  );
};

export default Navigation;
