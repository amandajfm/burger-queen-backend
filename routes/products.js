const router = require('express').Router();
const Products = require('../controllers/products');

router.get("/", Products.getProducts);
router.get("/:id", Products.getProductsById);
router.post("/", Products.postProducts);
router.put("/:id", Products.putProducts);
router.delete("/:id", Products.deleteProducts);

module.exports = router;


//Desta forma funcionaria, porém as rotas estariam misturadas com os controllers
// const models = require('../models');
// const Products = models.Products;

// router.get("/", (req, res) => {
//     Products.findAll()
//         .then(productsList => {
//             res.send(productsList)
//         });
// });

// router.get("/:id", (req, res) => {
//     Products.findByPk(req.params.id)
//         .then(products => {
//             res.send(products);
//         });
// });

// router.post("/", (req, res) => {
//     Products.create(req.body)
//         .then(products => {
//             res.status(201).send(products);
//         })
// });

// router.put("/:id", (req, res) => {
//     Products.update({ ...req.body }, { where: { id: req.params.id } })
//         .then(() => {
//             Products
//                 .findByPk(req.params.id)
//                 .then(products => res.send(products.dataValues))
//         });
// });

// router.delete("/:id", (req, res) => {
//     Products.destroy({ where: { id: req.params.id } })
//         .then(() => res.sendStatus(200));
// });

// module.exports = router;