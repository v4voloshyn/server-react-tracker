import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/_api';
import {
	addTrackLocal,
	clearAllTracksLocal,
	removeTrackLocal,
	updateTrackLocal,
} from './track-slice';

export const fetchTracksAsync = createAsyncThunk(
	'trackSlice/getAll',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.get('/tracks');

			if (response.status !== 200) {
				throw new Error('Something went wrong during fetching tracks');
			}
			const { data } = response;
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const addTrackAsync = createAsyncThunk(
	'trackSlice/addOne',
	async (newTrack, { dispatch, rejectWithValue }) => {
		try {
			const response = await api.post(`/tracks`, newTrack);

			if (response.status !== 201) {
				throw new Error('Track was not added! Try to reload page and try again');
			}
			const { data } = response;

			dispatch(addTrackLocal(data));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const removeTrackAsync = createAsyncThunk(
	'trackSlice/removeOne',
	async (id, { dispatch, rejectWithValue }) => {
		try {
			const response = await api.delete(`/tracks/${id}`);

			if (response.status !== 200) {
				throw new Error('Track is not removed. Something went wrong...');
			}

			dispatch(removeTrackLocal(id));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const updateTrackAsync = createAsyncThunk(
	'trackSlice/updateOne',
	async (_id, { dispatch, rejectWithValue }) => {
		try {
			const response = await api.put(`/tracks/${_id}`);

			if (response.status !== 200) {
				throw new Error('Something went wrong when trying to update track');
			}
			const { data } = response;

			dispatch(updateTrackLocal(data));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const clearAllTracksAsync = createAsyncThunk(
	'trackSlice/removeAll',
	async (_id, { dispatch, rejectWithValue }) => {
		try {
			const response = await api.delete('/tracks');

			if (response.status !== 200) {
				throw new Error('Something went wrong on deleting tracks collection');
			}

			dispatch(clearAllTracksLocal());
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
