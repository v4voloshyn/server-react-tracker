import mongoose from 'mongoose';

const trackSchema = mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: [true, 'Please enter a name of track']
	},
	secondsCount: {
		type: Number,
		default: 0,
	},
	isPaused: {
		type: Boolean,
		default: false
	},
}, {
	timestamps: true,
});

export default mongoose.model('track', trackSchema)
