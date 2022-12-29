import express from 'express';
const router = express.Router();
import { check } from 'express-validator';
import { login } from '../controllers/currentUserController.js';
import { verifyToken } from '../middleware/auth.js';


router.use(express.json());

router.route('/')
    .post([
        check('email').exists().isEmail(),
        check('password').exists().isLength({ min: 5 })
    ],
        login
    );




export { router as currentUser };