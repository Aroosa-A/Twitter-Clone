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
import { verifyToken } from './middleware/auth.js';
import { makePosts } from "./controllers/chitterPostsController.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});
const app = express();
app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/chitterPosts", upload.single("picture"), verifyToken, makePosts);


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