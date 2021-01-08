import { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { AppActionTypes, AppState } from '../../store/types';
import { decrementPeriod, incrementPeriod } from '../../store/actions';
import style from './Navigation.module.scss';

const Navigation = (): React.ReactElement => {
  const period = useSelector(({ selectedPeriod }: AppState) => selectedPeriod);
  const dispatch = useDispatch<Dispatch<AppActionTypes>>();

  const onDecrementClick = () => {
    dispatch(decrementPeriod());
  };

  const onIncrementClick = () => {
    dispatch(incrementPeriod());
  };

  return (
    <div className={style.container}>
      <Button shape="circle" icon={<LeftOutlined />} onClick={onDecrementClick} />
      <h3 className={style.period}>{period.format('MMMM YYYY')}</h3>
      <Button shape="circle" icon={<RightOutlined />} onClick={onIncrementClick} />
    </div>
  );
};

export default Navigation;
