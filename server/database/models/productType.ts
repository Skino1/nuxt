import connectionMysql from "../config/db";
import IProductType from "../interfaces/productType";

export default {
  async findAllproducts() {
    const query = "SELECT * FROM product_type";
    const [products] = await connectionMysql.execute(query);
    return products as IProductType[];
  },
};
