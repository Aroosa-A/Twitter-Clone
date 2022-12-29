import ChitterPost from '../models/chitterPostsSchema.js';
import { validationResult } from "express-validator";


export const makePosts = async (req, res) => {
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
}