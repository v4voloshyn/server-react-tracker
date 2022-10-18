import asyncHandler from 'express-async-handler';
import TrackModel from '../models/trackModel.js'

// @desc Get all tracks
// @route GET /api/v1/tracks
// @acces Public
export const getTracks = asyncHandler (async (req, res) => {
	const allTracks = await TrackModel.find({});
	res.status(200).json(allTracks);
})

// @desc START/Create new track
// @route POST /api/v1/tracks
// @acces Public
export const createNewTrack = asyncHandler (async (req, res) => {
	const track = await TrackModel.create({
		title: req.body.title || new Date().toISOString()
	})
	return res.status(201).json(track);
})

// @desc Delete track
// @route DELETE /api/v1/tracks/:trackID
// @acces Public
export const deleteTrack = asyncHandler (async (req, res) => {
	const track = await TrackModel.findByIdAndDelete(req.params.trackID)
	if(!track){
		return res.status(404).json({sucess: false, msg: 'Wrong trackID or it is removed already'});
	}
	res.status(201).json({sucess: true, msg: 'Track successfull was removed', track});
})

// @desc Pause track
// @route PUT /api/v1/tracks/:trackID
// @acces Public
export const changeTrackStatus = asyncHandler (async (req, res) => {
	const track = await TrackModel.findById(req.params.trackID)
	if(!track){
		return res.status(404).json({sucess: false, msg: 'Track does not exist'});
	}
	//res.status(201).json({sucess: true, msg: 'Track successfull was removed', track});
})
