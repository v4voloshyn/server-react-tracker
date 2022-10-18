import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
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

app.use('/api/v1/tracks', trackRouter)

if(process.env.NODE_ENV === 'production') {
   app.use(express.static('client/build'));

   app.get('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} Mode on ${PORT} Port`.cyan.bold))
