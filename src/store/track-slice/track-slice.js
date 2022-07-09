import { createSlice } from '@reduxjs/toolkit';
import { fetchTracksAsync } from './action-creator';

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
			state.tracks = [action.payload, ...state.tracks];
		},
		removeTrackLocal(state, action) {
			state.tracks = state.tracks.filter(
				(track) => track.id !== action.payload
			);
		},
		updateTrackLocal(state, action) {
			state.tracks = state.tracks.map((track) => {
				const { id, ...rest } = action.payload;
				if (track.id !== id) return track;
				return { ...track, ...rest };
			});
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
							count:
								Math.round((Date.now() - track.startedAt) / 1000) + track.count,
						};
					})
					.reverse();
			})
			.addCase(fetchTracksAsync.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			}),
});

export const { addTrackLocal, removeTrackLocal, updateTrackLocal } =
	trackSlice.actions;

export default trackSlice.reducer;
