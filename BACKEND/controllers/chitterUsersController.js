import bcrypt from "bcrypt";
import ChitterUser from '../models/chitterUsersSchema.js';
import { validationResult } from 'express-validator';


export const register = async (req, res) => {

    const { firstName, secondName, email, userName, password } = req.body;
    const errors = validationResult(req);
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    if (!errors.isEmpty()) {
        res.send({ message: `There were errors in the sign up data` });
    }
    else {
        ChitterUser.findOne({}, (err, chitters) => {
            if (chitters === null) {
                const chitterUser = new ChitterUser({
                    firstName,
                    secondName,
                    email,
                    userName,
                    password: hashedPassword
                });
                chitterUser.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send({ message: 'Registered Successfully! please login to continue', chitterUser });
                    }
                });
            }
            else {
                ChitterUser.findOne({ $or: [{ email }, { userName }] }, (err, chitterUser) => {
                    if (chitterUser === null) {
                        const chitterUser = new ChitterUser({
                            firstName,
                            secondName,
                            email,
                            userName,
                            password: hashedPassword
                        });
                        chitterUser.save(err => {
                            if (err) {
                                res.send(err);
                            }
                            else {
                                res.send({ message: 'Registered Successfully! please login to continue', chitterUser });
                            }
                        });
                    }
                    else {
                        res.send({ message: `User already exists` });
                    }
                });
            }
        });
    }
}