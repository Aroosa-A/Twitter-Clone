import express from 'express';
const router = express.Router();
import ChitterUser from '../models/chitterUsersSchema.js';
import { check, validationResult } from 'express-validator';


router.use(express.json());

router.route('/')
    .post([
        check('email').exists().isEmail(),
        check('password').exists().isLength({ min: 5 })
    ],
        (req, res) => {
            const { email, password } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.send({ message: `There were errors in the log in data` });
            }
            else {
                ChitterUser.findOne({ email }, (err, currentUser) => {
                    if (currentUser && password === currentUser.password) {
                        res.send({ message: `Login success`, currentUser });
                    }
                    else if (currentUser) {
                        res.send({ message: `Your password is incorrect` });
                    }
                    else
                        res.send({ message: `You need to signUp before logging in` });
                });
            }

        });




export { router as currentUser };