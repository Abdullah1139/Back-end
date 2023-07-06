import productModel from "../model/products.js";

export const createProduct = async (req, res) =>{
    const product = req.body;

    const newProduct = new productModel(product);
    try {
      await newProduct.save();
      res.json(newProduct);
    } catch (error) {
      console.log("not saved...");
    }

}