import getCartQuery from "../database/queries/getcartquery.js";

const getCartHandler = (req, res) => {
  getCartQuery().then(data => res.send(data.rows))
}

export default getCartHandler;