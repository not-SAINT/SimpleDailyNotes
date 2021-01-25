import {
  AddNote,
  ADD_NOTE,
  DecrementMonth,
  DECREMENT_MONTH,
  DeleteNote,
  DELETE_NOTE,
  IncrementMonth,
  INCREMENT_MONTH,
  Note,
  RESET_DAY,
  ResetDay,
  SelectNewMonth,
  SELECT_MONTH,
  ToogleDay,
  ToogleNote,
  TooglePeriod,
  TOOGLE_DAY,
  TOOGLE_NOTE,
  TOOGLE_PERIOD,
} from './types';

export const selectNewMonth = (newMonth: number): SelectNewMonth => {
  return {
    type: SELECT_MONTH,
    payload: newMonth,
  };
};

export const decrementMonth = (): DecrementMonth => {
  return {
    type: DECREMENT_MONTH,
  };
};

export const incrementMonth = (): IncrementMonth => {
  return {
    type: INCREMENT_MONTH,
  };
};

export const toogleDay = (newDay: Date): ToogleDay => {
  return {
    type: TOOGLE_DAY,
    payload: newDay,
  };
};

export const resetDay = (): ResetDay => {
  return {
    type: RESET_DAY,
  };
};

export const toogleNote = (note: Note | null): ToogleNote => {
  return {
    type: TOOGLE_NOTE,
    payload: note,
  };
};

export const addNote = (note: Note): AddNote => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const deleteNote = (note: Note): DeleteNote => {
  return {
    type: DELETE_NOTE,
    payload: note,
  };
};

export const tooglePeriod = (dates: moment.Moment[] | null): TooglePeriod => {
  return {
    type: TOOGLE_PERIOD,
    payload: dates,
  };
};
