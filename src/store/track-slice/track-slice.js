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
		addTrack(state, action) {
			state.tracks.push(action.payload);
		},
		removeTrack(state, action) {
			state.tracks = state.tracks.filter(
				(track) => track.id !== action.payload
			);
		},
	},
	extraReducers: (builder) =>
		builder.addCase(fetchTracksAsync.fulfilled, (state, action) => {
			state.tracks = action.payload;
		}),
});

export const { addTrack, removeTrack } = trackSlice.actions;

export default trackSlice.reducer;
