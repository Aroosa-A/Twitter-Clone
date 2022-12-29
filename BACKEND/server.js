import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from "path";
import { fileURLToPath } from "url";

import { chitterPosts } from './routes/chitterPosts.js';
import { chitterUsers } from './routes/chitterUsers.js';
import { currentUser } from './routes/currentUser.js';


/* CONFIGURATIONS */
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

/* ROUTES */
app.use('/chitterPosts', chitterPosts);
app.use('/chitterUsers', chitterUsers);
app.use('/currentUser', currentUser);

/* MONGODB SETUP */
const main = async () => {
    console.log(`Connecting to Database at ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
    // console.log('Connected to Database');
}
main().catch(error => console.log(error));

/* SERVER */
const port = process.env.PORT;
const host = process.env.HOST;
const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});



export default server;