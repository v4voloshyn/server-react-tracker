import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://timetracker-cb4a.onrender.com/api/v1',
});
