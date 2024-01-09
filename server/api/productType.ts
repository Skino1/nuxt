import productType from "../database/models/productType";
export default defineEventHandler(async () => {
  const productTypes = await productType.findAllproducts();
  return productTypes;
});
