import { getProductsQuery } from '../database/queries/getproductsquery.js';

const getProductsHandler = (req, res) => {
  if (req.query.category) {
    getProductsQuery(req.query.category).then((data) => res.send(data.rows));
  } else {
    getProductsQuery().then((data) => res.send(data.rows));
  }
};

export { getProductsHandler };
