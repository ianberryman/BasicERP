var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var customers = [
       {
           id: 1,
           name: "ABC Company",
           website: "example.com",
           contactName: "Sally Green",
           contactPhone: "5555551234",
           contactEmail: "sally.green@example.com"
       }
   ];
    res.send(customers);
});

router.post('/', function (req,res) {
    res.status(201);
    res.send(req.body);
});

router.get('/:customer_id', function (req, res) {
    var customer = {
       id: parseInt(req.params.customer_id),
       name: "ABC Company",
       website: "example.com",
       contactName: "Sally Green",
       contactPhone: "5555551234",
       contactEmail: "sally.green@example.com"
   };
   res.send(customer);
});

router.put('/:customer_id', function (req,res) {
    res.send(req.body);
});

router.delete('/:customer_id', function (req,res) {
   res.send({
       message: "Customer deleted successfully"
   });
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