import express from 'express';
const router = express.Router();

import { check } from 'express-validator';
import { register } from '../controllers/chitterUsersController.js';
import { verifyToken } from '../middleware/auth.js';


router.use(express.json());

router.route('/')
    .post([
        check('firstName').exists().isLength({ min: 2 }),
        check('secondName').exists().isLength({ min: 2 }),
        check('email').exists().isEmail(),
        check('userName').exists().isLength({ min: 2 }),
        check('password').exists().isLength({ min: 5 })
    ],
        register
    );




export { router as chitterUsers }