const db = require('./database');

const getCustomers = () => {
    return new Promise(function(resolve, reject) {
        db.query('SELECT * FROM customer;', function (error, results, fields) {
            if (error) throw error;
            resolve(results);
        });
    });
};

const getCustomerById = (id) => {
    return new Promise(function(resolve, reject) {
        db.query('SELECT * FROM customer WHERE id = ? LIMIT 1;', [id], function (error, results, fields) {
            if (error) throw error;
            resolve(results[0]);
        });
    });
}

const createCustomer = (customer) => {
    return new Promise(function(resolve, reject) {
        var newCustomer = {
            name: customer.name,
            website: customer.website,
            contact_name: customer.contactName,
            contact_phone: customer.contactPhone,
            contact_email: customer.contactEmail
        }
        db.query('INSERT INTO customer SET ?', newCustomer, function (error, results, fields) {
            if (error) throw error;
            resolve(getCustomerById(parseInt(results.insertId)));
        });
    });
}

const updateCustomer = (customer, id) => {
    return new Promise(function(resolve, reject) {
        var newCustomer = {
            name: customer.name,
            website: customer.website,
            contact_name: customer.contactName,
            contact_phone: customer.contactPhone,
            contact_email: customer.contactEmail
        }
        db.query('UPDATE customer SET ? WHERE id = ?', [newCustomer, id], function (error, results, fields) {
            if (error) throw error;
            resolve(getCustomerById(parseInt(id)));
        });
    });
}

const deleteCustomer = (id) => {
    return new Promise(function(resolve, reject) {
        db.query('DELETE FROM customer WHERE id = ?', [id], function (error, results, fields) {
            if (error) throw error;
            resolve(results);
        });
    });
}

module.exports = {
    getCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
}