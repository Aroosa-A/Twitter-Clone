import express from 'express';
const router = express.Router();
import ChitterUser from '../models/chitterUsersSchema.js';
import { check, validationResult } from 'express-validator';


router.use(express.json());

router.route('/')
    .post([
        check('firstName').exists().isLength({ min: 2 }),
        check('secondName').exists().isLength({ min: 2 }),
        check('email').exists().isEmail(),
        check('userName').exists().isLength({ min: 2 }),
        check('password').exists().isLength({ min: 5 })
    ],
        (req, res) => {

            const { email, userName } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.send({ message: `There were errors in the sign up data` });
            }
            else {
                ChitterUser.findOne({}, (err, chitters) => {
                    if (chitters === null) {
                        const chitterUser = new ChitterUser(req.body);
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
                                const chitterUser = new ChitterUser(req.body);
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
        });




export { router as chitterUsers }