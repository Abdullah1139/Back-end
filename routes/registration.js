import express from "express";
import { createRegistration, login  } from '../controllers/registration.js';
const registration= express.Router();

// registration.post("/",createRegistration)
registration.post("/", login )

export default registration;