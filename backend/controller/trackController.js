import asyncHandler from 'express-async-handler';
import TrackModel from '../models/trackModel.js';

// @desc Get all tracks
// @route GET /api/v1/tracks
// @acces Public
export const getTracks = asyncHandler(async (req, res) => {
	const allTracks = await TrackModel.find({});
	res.status(200).json(allTracks);
});

// @desc Start/Create new track
// @route POST /api/v1/tracks
// @acces Public
export const createNewTrack = asyncHandler(async (req, res) => {
	const track = await TrackModel.create({
		title: req.body.title || new Date().toISOString(),
	});
	return res.status(201).json(track);
});

// @desc Delete track
// @route DELETE /api/v1/tracks/:trackID
// @acces Public
export const deleteTrack = asyncHandler(async (req, res) => {
	const track = await TrackModel.findByIdAndDelete(req.params.trackID);
	if (!track) {
		return res.status(404).json({
			success: false,
			msg: 'Wrong trackID or it was removed already',
		});
	}
	res.status(200).json({
		success: true,
		msg: 'Track successful was removed',
		track,
	});
});

// @desc Delete ALL tracks
// @route DELETE /api/v1/tracks
// @acces Public
export const deleteALLTracks = asyncHandler(async (req, res) => {
	await TrackModel.deleteMany({});
	res.status(200).json({
		success: true,
		msg: 'All tracks have been deleted',
	});
});

// @desc Change track status (Play/Pause)
// @route PUT /api/v1/tracks/:trackID
// @acces Public
export const changeTrackStatus = asyncHandler(async (req, res) => {
	const { trackID } = req.params;
	const track = await TrackModel.findById(trackID);
	if (!track) {
		return res.status(404).json({
			success: false,
			msg: 'Track does not exist',
		});
	}
	if (track.isPaused) {
		const updatedTrack = await TrackModel.findByIdAndUpdate(
			trackID,
			{
				isPaused: false,
			},
			{
				new: true,
			}
		);
		return res.status(200).json({
			success: true,
			msg: 'Unpause track',
			track: updatedTrack,
		});
	} else {
		const updatedTrack = await TrackModel.findByIdAndUpdate(
			trackID,
			{
				isPaused: true,
				secondsCount: track.secondsCount + (Date.now() - new Date(track.updatedAt)) / 1000,
			},
			{
				new: true,
			}
		);
		return res.status(200).json({
			success: true,
			msg: 'Track was paused',
			track: updatedTrack,
		});
	}
});
