import connectionMysql from '../config/db';
import product from '../interfaces/products';

export default {
  async findAllproducts() {
    const query = 'SELECT * FROM products';
    const [products] = await connectionMysql.execute(query);
    return products as product[];

  }
}