import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import registration from './routes/registration.js';
import sellerRegistration from './routes/sellerRegistration.js';
import products from './routes/products.js';
import loginRouter from './routes/login.js';
import paymentRouter from './routes/payments.js';
const app = express();
const url = 'mongodb+srv://abdullah:123@cluster0.2lu0zix.mongodb.net/';
// require('dotenv').config();

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected'));
app.listen(1139, () => console.log(`server running at ${process.env.PORT}`));

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/registration', registration);
app.use('/sellerRegistration', sellerRegistration);
app.use('/product', products);
app.use('/login', loginRouter);
app.use('/jazzcash', paymentRouter);
