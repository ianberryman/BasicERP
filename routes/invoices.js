var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    res.status(201);
    res.send(req.body);
});

router.get("/:invoice_id", function (req, res) {
    var invoice = {
        id: parseInt(req.params.invoice_id),
        invoiceNumber: "202006001",
        customerId: 1,
        amount: 2553.00,
        invoiceDate: "2020-06-15",
        isPaid: true,
        paidDate: "2020-06-25"
    }
    res.send(invoice);
});

router.put('/:invoice_id', function (req, res) {
    res.send(req.body);
});

router.delete('/:invoice_id', function (res, res) {
    res.send({
        "message": "Invoice deleted successfully"
    });
});

router.get('/:invoice_id/documents', function (req, res) {
   var documents = [
       {
           id: 1,
           docType: "Invoice",
           docLink: "example.com/documents/ds651ds-ds651-q9e81d6s549-ds615"
       }
   ];
   res.send(documents);
});

module.exports = router;
