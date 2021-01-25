import moment from 'moment';
import { addNote } from '../utils/utils';

import {
  AppState,
  AppActionTypes,
  SELECT_MONTH,
  DECREMENT_MONTH,
  INCREMENT_MONTH,
  TOOGLE_DAY,
  TOOGLE_NOTE,
  ADD_NOTE,
  DELETE_NOTE,
  Note,
  TOOGLE_PERIOD,
  RESET_DAY,
} from './types';

const CURRENT_DATE = new Date();
const DEMO_NOTES = [
  {
    id: '2021011023:00',
    message: 'Send task solution to form...',
  },
  {
    id: '2021011109:00',
    message: 'Check email...',
  },
  {
    id: '2021011110:00',
    message: 'Todo something',
  },
  {
    id: '2021012523:00',
    message: 'Send task solution part 2 to form...',
  },
] as Note[];

const initialAppState: AppState = {
  selectedMonthNumber: CURRENT_DATE.getMonth(),
  selectedMonth: moment().year(CURRENT_DATE.getFullYear()).month(CURRENT_DATE.getMonth()).date(1),
  selectedDay: null,
  selectedNote: null,
  notes: DEMO_NOTES,
  selectedPeriod: null,
};

const appStateReducer = (state = initialAppState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SELECT_MONTH:
      return {
        ...state,
        selectedMonthNumber: action.payload,
      };
    case DECREMENT_MONTH:
      return {
        ...state,
        selectedMonth: state.selectedMonth.clone().subtract(1, 'month'),
      };
    case INCREMENT_MONTH:
      return {
        ...state,
        selectedMonth: state.selectedMonth.clone().add(1, 'month'),
      };
    case TOOGLE_DAY:
      return {
        ...state,
        selectedDay: state.selectedDay !== action.payload ? action.payload : null,
      };
    case RESET_DAY:
      return {
        ...state,
        selectedDay: null,
      };
    case TOOGLE_NOTE:
      return {
        ...state,
        selectedNote: state.selectedNote !== action.payload ? action.payload : null,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: addNote(state.notes, action.payload),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(({ id }) => id !== action.payload.id),
      };
    case TOOGLE_PERIOD:
      return {
        ...state,
        selectedPeriod: action.payload ? [...action.payload] : null,
      };
    default:
      return state;
  }
};

export default appStateReducer;
