import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
import cors from 'cors';
import colors from 'colors';
import {connectToMongoDB} from './config/mongoConnection.js'
import { trackRouter } from './router/trackRouter.js';
dotenv.config();

connectToMongoDB();
const app = express();

if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'))
}
app.use(express.json());
app.use(cors());

app.use('/api/v1/tracks', trackRouter)

// Serve frontend
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res) => res.send('Please switch to production mode'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} Mode on ${PORT} Port`.cyan.bold))
