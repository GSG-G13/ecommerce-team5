import { query } from 'express';
import getFilteredProductsQuery from '../database/queries/getFilteredProducts.js';

const getFilteredProductsController = (req, res) => {
  // here i will git the category from the query string
  const { category } = req.query;
  console.log(category);

  getFilteredProductsQuery(category)
    .then((data) => res.send(data.rows))
    .catch((err) => console.log(err));
};

export default getFilteredProductsController;
