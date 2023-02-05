import {
	addTrackAsync,
	clearAllTracksAsync,
	fetchTracksAsync,
	removeTrackAsync,
	updateTrackAsync,
} from './action-creator';

import { createSlice } from '@reduxjs/toolkit';
import { setErrorInSlice } from '../../utils/setErrorInSlice';

const defaultState = {
	tracks: [],
	isLoading: false,
	error: '',
};

const trackSlice = createSlice({
	name: 'trackSlice',
	initialState: defaultState,
	reducers: {
		addTrackLocal(state, action) {
			state.error = '';
			state.tracks = [action.payload, ...state.tracks];
		},
		removeTrackLocal(state, action) {
			state.error = '';
			state.tracks = state.tracks.filter((track) => track._id !== action.payload);
		},
		updateTrackLocal(state, action) {
			state.error = '';
			state.tracks = state.tracks.map((track) => {
				const { id, ...rest } = action.payload;
				if (track._id !== id) return track;
				return { ...track, ...rest };
			});
		},
		clearAllTracksLocal(state) {
			state.error = '';
			state.tracks = [];
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchTracksAsync.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchTracksAsync.fulfilled, (state, action) => {
				state.isLoading = false;
				// map payload to check if track is still counting (not Paused) and set right count
				// and reverse data for reversed view
				state.tracks = action.payload
					.map((track) => {
						if (track.isPaused) return track;
						return {
							...track,
							secondsCount:
								Math.round((Date.now() - new Date(track.updatedAt)) / 1000) + track.secondsCount,
						};
					})
					.reverse();
			})
			.addCase(fetchTracksAsync.rejected, setErrorInSlice)
			.addCase(addTrackAsync.rejected, setErrorInSlice)
			.addCase(removeTrackAsync.rejected, setErrorInSlice)
			.addCase(updateTrackAsync.rejected, setErrorInSlice)
			.addCase(clearAllTracksAsync.rejected, setErrorInSlice),
});

export const { addTrackLocal, removeTrackLocal, updateTrackLocal, clearAllTracksLocal } =
	trackSlice.actions;

export default trackSlice.reducer;
