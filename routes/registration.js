import express from "express";
import { createRegistration,  } from '../controllers/registration.js';
const registration= express.Router();

registration.post("/",createRegistration)

export default registration;