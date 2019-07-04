const router = require('express').Router();
const Order = require('../controllers/orders');

router.get("/", Order.getOrders);
router.get("/:id", Order.getOrdersById);
router.post("/", Order.postOrders);
router.put("/:id", Order.putOrders);
router.delete("/:id", Order.deleteOrders);

module.exports = router;



//Desta forma funcionaria, porém as rotas e os controllers estariam misturados =>
// const models = require('../models');
// const Orders = models.Orders;

// router.get("/", (req, res) => {
//     Orders.findAll()
//         .then(ordersList => {
//             res.send(ordersList)
//         });
// });

// router.get("/:id", (req, res) => {
//     Orders.findByPk(req.params.id)
//         .then(orders => {
//             res.send(orders);
//         });
// });

// router.post("/", (req, res) => {
//     Orders.create(req.body)
//         .then(orders => {
//             res.status(201).send(orders);
//         })
// });

// router.put("/:id", (req, res) => {
//     Orders.update({ ...req.body }, { where: { id: req.params.id } })
//         .then(() => {
//             Orders
//                 .findByPk(req.params.id)
//                 .then(orders => res.send(orders.dataValues))
//         });
// });

// router.delete("/:id", (req, res) => {
//     Orders.destroy({ where: { id: req.params.id } })
//         .then(() => res.sendStatus(200));
// });

// module.exports = router;