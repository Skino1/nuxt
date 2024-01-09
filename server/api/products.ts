import product from "../database/models/products"
export default defineEventHandler(async event => {
    const products = await product.findAllProducts();
    return products;
})