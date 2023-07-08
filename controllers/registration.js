import registrationModel from "../model/registration.js";
import jwt from 'jsonwebtoken'
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

export const login = async (req, res) => {

  const {email, password} = req.body;
  console.log('Login Reached');
  console.log(req.body);
  try {
    const user = await registrationModel.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = user.password === password;

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ email: user.email, id: user._id }, 'test', {
      expiresIn: '1h',
    });
    console.log(token)
    res.status(200).json({ result: user, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
}