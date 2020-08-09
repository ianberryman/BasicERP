var express = require('express');
var customerDao = require("../datasource/customerDao");
var invoiceDao = require("../datasource/invoiceDao");
var router = express.Router();

router.get('/', function (req, res) {
    customerDao.getCustomers().then(customers => {
        res.send(customers);
    }).catch(err => setImmediate(() => {throw err;}));
});

router.post('/', function (req,res) {
    customerDao.createCustomer(req.body).then(customer => {
        //handle fail
        if (!customer) {
            res.status(500);
            res.send({
                message: "System error"
            })
            //handle success
        } else {
            res.status(201);
            res.send(customer);
        }
    }).catch(err => setImmediate(() => {throw err;}));
});

router.get('/:customer_id', function (req, res) {
    customerDao.getCustomerById(parseInt(req.params.customer_id)).then(customer => {
        if (!customer) {
            res.status(404);
            res.send({
                message: "Customer not found"
            })
        } else {
            res.send(customer);
        }
    }).catch(err => setImmediate(() => {throw err;}));
});

router.get('/:customer_id/invoices', function (req, res) {
    invoiceDao.getInvoicesByCustomerId(parseInt(req.params.customer_id)).then(invoices => {
        res.send(invoices);
    }).catch(err => setImmediate(() => {throw err;}));
});

router.put('/:customer_id', function (req,res) {
    customerDao.updateCustomer(req.body, req.params.customer_id).then(customer => {
        //handle fail
        if (!customer) {
            res.status(500);
            res.send({
                message: "System error"
            })
            //handle success
        } else {
            res.send(customer);
        }
    }).catch(err => setImmediate(() => {throw err;}));
});

router.delete('/:customer_id', function (req,res) {
    customerDao.deleteCustomer(parseInt(req.params.customer_id)).then(results => {
        res.send({
            message: "Customer deleted successfully"
        });
    }).catch(err => setImmediate(() => {throw err;}));
});

router.get('/:customer_id/invoices', function (req,res) {
    var invoices = [
        {
            id: 1,
            invoiceNumber: "202006001",
            customerId: 1,
            amount: 2553.00,
            invoiceDate: "2020-06-15",
            isPaid: true,
            paidDate: "2020-06-25"
        }
    ];
    res.send(invoices);
});

module.exports = router;