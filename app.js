const express = require("express");
const app = express();
const db = require('./models/index');
// const bodyParser = require('body-parser');
app.listen(9883, console.log("Servidor rodando"));

app.use(express.json());
//app.use(express.urlencoded({extended:true}));

app.use("/users", require("./routes/user"));
app.use("/products", require("./routes/products"));
app.use("/orders", require("./routes/orders"))

db.sequelize.sync();
