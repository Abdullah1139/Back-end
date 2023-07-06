import sellerRegistrationModel from "../model/sellerRegistration.js";
export const createSellerRegistration = async (req, res) => {
    console.log("Controller Reached");
    console.log(req.body);
    const seller = req.body;
    console.log(seller);
    const sellerRegistration = new sellerRegistrationModel(seller);
    try {
      await sellerRegistration.save();
      res.json(sellerRegistration);
    } catch (error) {
      console.log("not saved...");
    }
  };

  export const getSellerRegistration = (res, req) => {};
