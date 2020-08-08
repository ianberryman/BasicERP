var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    res.status(201);
    res.send(req.body);
});

router.get("/:document_id", function (req, res) {
    var document = {
        "id": parseInt(req.params.document_id),
        "docType": "Invoice",
        "docLink": "example.com/documents/ds651ds-ds651-q9e81d6s549-ds615"
    }
    res.send(document);
});

router.put('/:document_id', function (req, res) {
    res.send(req.body);
});

router.delete('/:document_id', function (res, res) {
    res.send({
        "message": "Document deleted successfully"
    });
});

module.exports = router;
