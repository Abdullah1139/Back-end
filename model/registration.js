import mongoose, { Mongoose } from 'mongoose';

const registrationStructure=mongoose.Schema({
    name: String,
    email:String,
    password:String,
    confirmPassword: String
})

const registrationModel=mongoose.model('registration',registrationStructure);
export default registrationModel;