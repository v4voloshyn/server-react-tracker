import { createSelector } from '@reduxjs/toolkit';

const getTrackSliceState = (state) => state.track;

export const selectTrackSlice = createSelector([getTrackSliceState], (tracks) => tracks);
