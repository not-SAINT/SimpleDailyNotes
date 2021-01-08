export const SELECT_MONTH = 'SELECT_MONTH';
export const DECREMENT_PERIOD = 'DECREMENT_PERIOD';
export const INCREMENT_PERIOD = 'INCREMENT_PERIOD';
export const TOOGLE_DAY = 'TOOGLE_DAY';
export const TOOGLE_NOTE = 'TOOGLE_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export interface Note {
  id: string;
  message: string;
}
export interface AppState {
  selectedMonth: number;
  selectedPeriod: moment.Moment;
  selectedDay: Date | null;
  selectedNote: Note | null;
  notes: Note[];
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

export type AppActionTypes =
  | SelectNewMonth
  | DecrementPeriod
  | IncrementPeriod
  | ToogleDay
  | ToogleNote
  | AddNote
  | DeleteNote;
