const db = require('./database');

const getUsers = () => {
    return new Promise(function(resolve, reject) {
        db.query('SELECT * FROM user;', function (error, results, fields) {
            if (error) throw error;
            resolve(results);
        });
    });
};

const getUserById = (id) => {
    return new Promise(function(resolve, reject) {
        db.query('SELECT * FROM user WHERE id = ? LIMIT 1;', [id], function (error, results, fields) {
            if (error) throw error;
            resolve(results[0]);
        });
    });
}

const createUser = (user) => {
    return new Promise(function(resolve, reject) {
        var newUser = {
            name: user.name,
            email: user.email,
            roleId: user.roleId
        }
        db.query('INSERT INTO user SET ?', newUser, function (error, results, fields) {
            if (error) throw error;
            resolve(getUserById(parseInt(results.insertId)));
        });
    });
}

const updateUser = (user, id) => {
    return new Promise(function(resolve, reject) {
        var newUser = {
            name: user.name,
            email: user.email,
            roleId: user.roleId
        }
        db.query('UPDATE user SET ? WHERE id = ?', [newUser, id], function (error, results, fields) {
            if (error) throw error;
            resolve(getUserById(parseInt(id)));
        });
    });
}

const deleteUser = (id) => {
    return new Promise(function(resolve, reject) {
        db.query('DELETE FROM user WHERE id = ?', [id], function (error, results, fields) {
            if (error) throw error;
            resolve(results);
        });
    });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}