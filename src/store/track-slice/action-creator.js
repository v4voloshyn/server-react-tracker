import {
	addTrackLocal,
	removeTrackLocal,
	updateTrackLocal,
} from './track-slice';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTracksAsync = createAsyncThunk(
	'trackSlice/fetch',
	async () => {
		try {
			const response = await fetch(
				`https://62c712372b03e73a58ded305.mockapi.io/api/v1/tracks`
			);

			if (!response.ok) {
				throw new Error('Something went wrong when fetching tracks');
			}
			const data = await response.json();

			return data;
		} catch (error) {
			console.log(error.message);
			console.log(error.stack);
		}
	}
);

export const addTrackAsync = createAsyncThunk(
	'trackSlice/add',
	async (newTrack, { dispatch }) => {
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
				throw new Error('Something went wrong when fetching tracks');
			}

			const data = await response.json();
			console.log(data);
			dispatch(addTrackLocal(data));
		} catch (error) {
			console.log(error.message);
		}
	}
);

export const removeTrackAsync = createAsyncThunk(
	'trackSlice/remove',
	async (id, { dispatch }) => {
		try {
			const response = await fetch(
				`https://62c712372b03e73a58ded305.mockapi.io/api/v1/tracks/${id}`,
				{
					method: 'DELETE',
				}
			);

			if (!response.ok) {
				throw new Error('Something went wrong when fetching tracks');
			}

			dispatch(removeTrackLocal(id));
		} catch (error) {
			console.log(error.message);
		}
	}
);

export const updateTrackAsync = createAsyncThunk(
	'trackSlice/update',
	async (newBody, { dispatch, getState }) => {
		const itemState = getState().track.tracks.find(
			(track) => track.id === newBody.id
		);
		console.log(newBody.count);
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
				throw new Error('Something went wrong when fetching tracks');
			}

			const data = await response.json();
			dispatch(updateTrackLocal(data));
		} catch (error) {
			console.log(error.message);
		}
	}
);