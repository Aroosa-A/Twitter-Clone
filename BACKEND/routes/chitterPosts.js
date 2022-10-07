import express from 'express';
const router = express.Router();
import ChitterPost from '../models/chitterPostsSchema.js';
import { check, validationResult } from 'express-validator';


router.use(express.json());


router.route('/')

    .post([
        check('firstName').exists().isLength({ min: 2 }),
        check('secondName').exists().isLength({ min: 2 }),
        check('userName').exists().isLength({ min: 2 }),
        check('postBody').exists().isLength({ min: 2 })
    ],
        (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.send({ message: `There were errors in the post` });
            }
            else {
                const chitterPost = new ChitterPost(req.body);
                chitterPost.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send({ message: 'Post successful', chitterPost });
                    }
                });
            }
        });
router.route('/')
    .get((req, res) => {
        ChitterPost.find((error, chitterposts) => {
            error ? res.status(404).send('Data not found') : res.json(chitterposts)
        })
    });



export { router as chitterPosts };