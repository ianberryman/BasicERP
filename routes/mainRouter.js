var express = require('express');
var router = express.Router();
var usersRouter = require("./users");
var customersRouter = require("./customers");
var invoicesRouter = require("./invoices");
var documentsRouter = require("./documents");
var inventoryRouter = require("./inventory");

router.use("/users", usersRouter);
router.use("/customers", customersRouter);
router.use("/invoices", invoicesRouter);
router.use("/documents", documentsRouter);
router.use("/inventory", inventoryRouter);

module.exports = router;