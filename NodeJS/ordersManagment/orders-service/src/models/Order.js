import Joi from "joi";

const orderSchema = Joi.object({
  name: Joi.string().required(),
  orderedAt: Joi.string().required(),
  completedAt: Joi.string(),
  products: Joi.array().required(),
  totalPrice: Joi.number().required(),
});

export class Order {
  name;
  orderedAt;
  completedAt;
  products;
  totalPrice;

  constructor({ name, orderedAt, completedAt, products, totalPrice, id }) {
    //kai kuriais atvejais rasyti intiID, initName
    const newOrderData = {
      name,
      orderedAt,
      completedAt,
      products,
      totalPrice,
      id,
    };

    const validationResult = orderSchema.validate(newOrderData);

    if (validationResult.error) {
      throw Error(validationResult.error);
    }

    this.id = id;
    this.name = name;
    this.orderedAt = orderedAt;
    this.completedAt = completedAt;
    this.products = products;
    this.totalPrice = totalPrice;
  }
}
