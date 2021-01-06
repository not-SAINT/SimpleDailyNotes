import moment from 'moment';

import { AppState, AppActionTypes, SELECT_MONTH, DECREMENT_PERIOD, INCREMENT_PERIOD, TOOGLE_DAY } from './types';

const CURRENT_DATE = new Date();

const initialAppState: AppState = {
  selectedMonth: CURRENT_DATE.getMonth(),
  selectedPeriod: moment().year(CURRENT_DATE.getFullYear()).month(CURRENT_DATE.getMonth()).date(1),
  selectedDay: null,
};

const appStateReducer = (state = initialAppState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SELECT_MONTH:
      return {
        ...state,
        selectedMonth: action.payload,
      };
    case DECREMENT_PERIOD:
      return {
        ...state,
        selectedPeriod: state.selectedPeriod.clone().subtract(1, 'month'),
      };
    case INCREMENT_PERIOD:
      return {
        ...state,
        selectedPeriod: state.selectedPeriod.clone().add(1, 'month'),
      };
    case TOOGLE_DAY:
      return {
        ...state,
        selectedDay: state.selectedDay !== action.payload ? action.payload : null,
      };
    default:
      return state;
  }
};

export default appStateReducer;
