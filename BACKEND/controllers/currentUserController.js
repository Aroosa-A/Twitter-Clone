import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import ChitterUser from '../models/chitterUsersSchema.js';
import jwt from "jsonwebtoken";
import { secret } from "../config/env.js";


export const login = async (req, res) => {
    const { email, password } = req.body;
    const currentUser = await ChitterUser.findOne({ email: email });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.send({ message: `There were errors in the log in data` });
    } else {
        if (currentUser) {
            const isMatch = await bcrypt.compare(password, currentUser.password);
            try {
                if (!isMatch) {
                    return res.send({ message: `Your password is incorrect` });
                }
                else {
                    const token = jwt.sign({ id: currentUser._id }, secret.JWT_SECRET);
                    delete currentUser.password;
                    res.status(200).json({ token, currentUser });
                }
            }
            catch (err) {
                res.send({ message: `Your email is incorrect` });
            }

        }
        else
            res.send({ message: `Your email is incorrect` });
    }



}