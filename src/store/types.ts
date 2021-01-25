export const SELECT_MONTH = 'SELECT_MONTH';
export const DECREMENT_MONTH = 'DECREMENT_MONTH';
export const INCREMENT_MONTH = 'INCREMENT_MONTH';
export const TOOGLE_DAY = 'TOOGLE_DAY';
export const RESET_DAY = 'RESET_DAY';
export const TOOGLE_NOTE = 'TOOGLE_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const TOOGLE_PERIOD = 'TOOGLE_PERIOD';

export interface Note {
  id: string;
  message: string;
}
export interface AppState {
  selectedMonthNumber: number;
  selectedMonth: moment.Moment;
  selectedDay: Date | null;
  selectedNote: Note | null;
  notes: Note[];
  selectedPeriod: moment.Moment[] | null;
}

export interface SelectNewMonth {
  type: typeof SELECT_MONTH;
  payload: number;
}

export interface DecrementMonth {
  type: typeof DECREMENT_MONTH;
}

export interface IncrementMonth {
  type: typeof INCREMENT_MONTH;
}

export interface ToogleDay {
  type: typeof TOOGLE_DAY;
  payload: Date;
}

export interface ResetDay {
  type: typeof RESET_DAY;
}

export interface ToogleNote {
  type: typeof TOOGLE_NOTE;
  payload: Note | null;
}

export interface AddNote {
  type: typeof ADD_NOTE;
  payload: Note;
}

export interface DeleteNote {
  type: typeof DELETE_NOTE;
  payload: Note;
}

export interface TooglePeriod {
  type: typeof TOOGLE_PERIOD;
  payload: moment.Moment[] | null;
}

export type AppActionTypes =
  | SelectNewMonth
  | DecrementMonth
  | IncrementMonth
  | ToogleDay
  | ResetDay
  | ToogleNote
  | AddNote
  | DeleteNote
  | TooglePeriod;
