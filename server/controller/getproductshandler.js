import {getProductsQuery} from "../database/queries/getproductsquery.js";

const getProductsHandler = (req, res) => {
  getProductsQuery().then(data => res.send(data.rows));
};

export {getProductsHandler};