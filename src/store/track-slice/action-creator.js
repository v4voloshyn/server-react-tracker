import {
	addTrackLocal,
	removeTrackLocal,
	updateTrackLocal,
} from './track-slice';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTracksAsync = createAsyncThunk(
	'trackSlice/fetch',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://62c712372b03e73a58ded305.mockapi.io/api/v1/tracks`
			);

			if (!response.ok) {
				throw new Error('Something went wrong during fetching tracks');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const addTrackAsync = createAsyncThunk(
	'trackSlice/add',
	async (newTrack, { dispatch, rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://62c712372b03e73a58ded305.mockapi.io/api/v1/tracks`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newTrack),
				}
			);

			if (!response.ok) {
				throw new Error(
					'Track was not added! Try to reload page and try again'
				);
			}

			const data = await response.json();

			dispatch(addTrackLocal(data));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const removeTrackAsync = createAsyncThunk(
	'trackSlice/remove',
	async (id, { dispatch, rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://62c712372b03e73a58ded305.mockapi.io/api/v1/tracks/${id}`,
				{
					method: 'DELETE',
				}
			);

			if (!response.ok) {
				throw new Error('Track is not removed. Something went wrong...');
			}

			dispatch(removeTrackLocal(id));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const updateTrackAsync = createAsyncThunk(
	'trackSlice/update',
	async (newBody, { dispatch, getState, rejectWithValue }) => {
		const itemState = getState().track.tracks.find(
			(track) => track.id === newBody.id
		);

		if (
			itemState.count === newBody.count &&
			itemState.isPaused === newBody.isPaused
		)
			return;

		const { id, ...rest } = newBody;
		try {
			const response = await fetch(
				`https://62c712372b03e73a58ded305.mockapi.io/api/v1/tracks/${id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(rest),
				}
			);

			if (!response.ok) {
				throw new Error('Something went wrong when trying to update track');
			}

			const data = await response.json();
			dispatch(updateTrackLocal(data));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const clearAllTrackAsync = () =>
	createAsyncThunk('trackSlice/clearAll', async () => {});
