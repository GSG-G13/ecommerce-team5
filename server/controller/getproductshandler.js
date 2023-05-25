import { getProductsQuery } from '../database/queries/products/getProductsQuery.js';

const getProductsHandler = (req, res) => {
  getProductsQuery().then((data) => res.send(data.rows));
};

export default { getProductsHandler };
