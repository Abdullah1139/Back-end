import express from 'express';
import { createRegistration, login } from '../controllers/registration.js';

const loginRouter = express.Router();

loginRouter.post('/', login);

export default loginRouter;
