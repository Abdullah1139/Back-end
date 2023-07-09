import express from 'express';
import { jazzcashPayment } from '../controllers/payment.js';

const paymentRouter = express.Router();

paymentRouter.post('/', jazzcashPayment);

export default paymentRouter;
