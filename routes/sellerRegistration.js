import express from "express";
import { createSellerRegistration,getSellerRegistration } from "../controllers/sellerRegistration.js";
const sellerRegistration= express.Router();

// sellerRegistration.get("/",getSellerRegistration)
sellerRegistration.post("/",createSellerRegistration)

export default sellerRegistration;