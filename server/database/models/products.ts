import connectionMysql from '../config/db';
import IProduct from '../interfaces/product'

export default {
  async findAllProducts() {
    const query = "SELECT * FROM products";
    const [products] = await connectionMysql.execute(query);
    return products as IProduct[];
  },
  async AddProduct() {
    const query = "INSERT IN TO products ";
    const [products] = await connectionMysql.execute(query);
    return products as IProduct[];
  },
  async EditProduct() {
    const query = "UPDATE products";
    const [products] = await connectionMysql.execute(query);
    return products as IProduct[];
  },
  async DeleteProduct() {
    const query = "DROP products";
    const [products] = await connectionMysql.execute(query);
    return products as IProduct[];
  },
};
