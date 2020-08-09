const db = require('./database');

const getInvoicesByCustomerId = (id) => {
    return new Promise(function(resolve, reject) {
        db.query('SELECT * FROM invoice WHERE customer_id = ?;', [id], function (error, results, fields) {
            if (error) throw error;
            resolve(results);
        });
    });
};



module.exports = {
    getInvoicesByCustomerId
}