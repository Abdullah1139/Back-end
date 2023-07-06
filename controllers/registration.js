import registrationModel from "../model/registration.js";

// export const getARegistration = (res, req) => {};

export const createRegistration = async (req, res) => {
  console.log("Controller Reached");
  console.log(req.body);
  const user = req.body;
  console.log(user);
  const newRegistration = new registrationModel(user);
  try {
    await newRegistration.save();
    res.json(newRegistration);
  } catch (error) {
    console.log("not saved...");
  }
};