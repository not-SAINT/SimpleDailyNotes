export const SELECT_MONTH = 'SELECT_MONTH';
export const DECREMENT_PERIOD = 'DECREMENT_PERIOD';
export const INCREMENT_PERIOD = 'INCREMENT_PERIOD';
export const TOOGLE_DAY = 'TOOGLE_DAY';

export interface AppState {
  selectedMonth: number;
  selectedPeriod: moment.Moment;
  selectedDay: Date | null;
}

export interface SelectNewMonth {
  type: typeof SELECT_MONTH;
  payload: number;
}

export interface DecrementPeriod {
  type: typeof DECREMENT_PERIOD;
}

export interface IncrementPeriod {
  type: typeof INCREMENT_PERIOD;
}

export interface ToogleDay {
  type: typeof TOOGLE_DAY;
  payload: Date;
}

export type AppActionTypes = SelectNewMonth | DecrementPeriod | IncrementPeriod | ToogleDay;
