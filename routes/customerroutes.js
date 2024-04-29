const customercontroller = require("../controllers/customer");

const express = require("express");
const customerrouter = express.Router();

customerrouter.post("/insertcustomer",customercontroller.insertcustomer);
customerrouter.post("/checkcutomerlogin",customercontroller.checkcutomerlogin);
customerrouter.get("/viewcustomer",customercontroller.viewcustomer);

module.exports = customerrouter;