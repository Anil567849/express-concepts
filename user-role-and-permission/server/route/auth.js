import express from 'express';
export const authRoute = express.Router();
import {auth} from '../middlewares/auth.js';

authRoute.post('/api/hello', auth("admin"), (req, res) => {
    res.send('hello');
})