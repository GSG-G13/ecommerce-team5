import gitSingleProduct from '../database/queries/gitSingleProduct.js';

const getSingleProductController = (req, res) => {
  const { id } = req.params;

  gitSingleProduct(id)
    .then((data) => res.send(data.rows))
    .catch((err) => console.log(err));
};

export default getSingleProductController;
