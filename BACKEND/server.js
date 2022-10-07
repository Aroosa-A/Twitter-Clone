import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { chitterPosts } from './routes/chitterPosts.js';
import bodyParser from 'body-parser';
import { chitterUsers } from './routes/chitterUsers.js';
import { currentUser } from './routes/currentUser.js';


dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});


const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/chitterPosts', chitterPosts);
app.use('/chitterUsers', chitterUsers);
app.use('/currentUser', currentUser);




const main = async () => {
    console.log(`Connecting to Database at ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
    // console.log('Connected to Database');
}

main().catch(error => console.log(error));

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});



export default server;