import { combineReducers } from 'redux';

import appStateReducer from './reducers';

const rootReducer = combineReducers({
  app: appStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
