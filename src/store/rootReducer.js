import { combineReducers } from '@reduxjs/toolkit';
import trackSliceReducer from './track-slice/track-slice';

export const rootReducer = combineReducers({
	track: trackSliceReducer,
});
