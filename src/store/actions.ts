import {
  DecrementPeriod,
  DECREMENT_PERIOD,
  IncrementPeriod,
  INCREMENT_PERIOD,
  SelectNewMonth,
  SELECT_MONTH,
  ToogleDay,
  TOOGLE_DAY,
} from './types';

export const selectNewMonth = (newMonth: number): SelectNewMonth => {
  return {
    type: SELECT_MONTH,
    payload: newMonth,
  };
};

export const decrementPeriod = (): DecrementPeriod => {
  return {
    type: DECREMENT_PERIOD,
  };
};

export const incrementPeriod = (): IncrementPeriod => {
  return {
    type: INCREMENT_PERIOD,
  };
};

export const toogleDay = (newDay: Date): ToogleDay => {
  return {
    type: TOOGLE_DAY,
    payload: newDay,
  };
};
