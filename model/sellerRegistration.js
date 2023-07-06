import mongoose from 'mongoose';

const sellerRegistrationStructure=mongoose.Schema({
    name:String,
    address:String,
    email:String,
    phone:String,
})

const sellerRegistrationModel=mongoose.model('sellerRegistration',sellerRegistrationStructure);
export default sellerRegistrationModel;