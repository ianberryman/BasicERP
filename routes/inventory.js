var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var items = [
        {
            id: 1,
            name: "5mm screw",
            stockOnHand: 2502,
            pricePerUnit: 0.03
        }
    ]
    res.send(items);
});

router.post('/', function (req, res) {
    res.status(201);
    res.send(req.body);
});

router.get("/:item_id", function (req, res) {
    var item = {
        id: parseInt(req.params.item_id),
        name: "5mm screw",
        stockOnHand: 2502,
        pricePerUnit: 0.03
    }
    res.send(item);
});

router.put('/:item_id', function (req, res) {
    res.send(req.body);
});

router.delete('/:item_id', function (res, res) {
    res.send({
        "message": "Inventory item deleted successfully"
    });
});

module.exports = router;
