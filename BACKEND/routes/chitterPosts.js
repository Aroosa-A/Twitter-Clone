import express from 'express';
const router = express.Router();
import { check } from 'express-validator';
import { makePosts } from '../controllers/chitterPostsController.js';
import { verifyToken } from '../middleware/auth.js';
import ChitterPost from '../models/chitterPostsSchema.js';


router.use(express.json());


router.route('/')

    .post([
        check('firstName').exists().isLength({ min: 2 }),
        check('secondName').exists().isLength({ min: 2 }),
        check('userName').exists().isLength({ min: 2 }),
        check('postBody').exists().isLength({ min: 2 })
    ],
        verifyToken,
        makePosts
    );
router.route('/')
    .get((req, res) => {
        ChitterPost.find((error, chitterposts) => {
            error ? res.status(404).send('Data not found') : res.json(chitterposts)
        })
    });



export { router as chitterPosts };