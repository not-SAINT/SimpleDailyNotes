import {
  AddNote,
  ADD_NOTE,
  DecrementPeriod,
  DECREMENT_PERIOD,
  DeleteNote,
  DELETE_NOTE,
  IncrementPeriod,
  INCREMENT_PERIOD,
  Note,
  SelectNewMonth,
  SELECT_MONTH,
  ToogleDay,
  ToogleNote,
  TOOGLE_DAY,
  TOOGLE_NOTE,
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
