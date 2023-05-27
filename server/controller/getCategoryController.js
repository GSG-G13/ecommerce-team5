import getCategories from '../database/queries/getCategories.js';

const getCategoriesController = (req, res) => {
  getCategories()
    .then((data) => res.send(data.rows))
    .catch((err) => console.log(err));
};

export default getCategoriesController;
