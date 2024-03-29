import express from 'express';
import {
	changeTrackStatus,
	createNewTrack,
	deleteALLTracks,
	deleteTrack,
	getTracks,
} from '../controller/trackController.js';

export const trackRouter = express.Router();

trackRouter.get('/', getTracks);
trackRouter.post('/', createNewTrack);
trackRouter.delete('/', deleteALLTracks);
trackRouter.delete('/:trackID', deleteTrack);
trackRouter.put('/:trackID', changeTrackStatus);
