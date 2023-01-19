import Joi from "joi";

const productSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string().required(),
  price: Joi.number().required(),
  isAvailable: Joi.boolean().required(),
  imageURL: Joi.string().required(),
});

export class Product {
  id;
  name;
  price;
  isAvailable;
  imageURL;

  constructor(name, price, isAvailable, imageURL, id) {
    const newProductData = { id, name, price, isAvailable, imageURL };

    const validationResult = productSchema.validate(newProductData);

    //console.log(validationResult);

    if (validationResult.error) {
      throw Error(validationResult.error);
    }

    this.id = id;
    this.name = name;
    this.price = price;
    this.isAvailable = isAvailable;
    this.imageURL = imageURL;
  }
}
