import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${connection.connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1)
	}
}
