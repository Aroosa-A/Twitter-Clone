import ChitterPost from '../models/chitterPostsSchema.js';
import { validationResult } from "express-validator";


export const makePosts = async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     res.send({ message: `There were errors in the post` });
    // }
    // else {
    console.log("here");
    const chitterPost = new ChitterPost(req.body);
    chitterPost.save(err => {
        if (err) {
            res.json({ message: 'post not successful' });
        }
        else {
            res.status(201).json({ message: 'Post successful', chitterPost });
        }
    });
    // }
}
