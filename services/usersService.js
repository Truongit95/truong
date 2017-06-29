const DataTypes = require('sequelize');
var sequelize = require('../models/db');
var Users = require('../models/Users')(sequelize, DataTypes);

var getAll = () => {
    return Users.findAll();
}

var getById = (id) => {
    return Users.findById(id);
}

var create = (object) => {
    return Users.create(object);
}

var update = (object, id) => {
    return Users.update(object, {
        where: {
            Id: id
        }
    });
}

var login = (object) => {
    return Users.findOne({
        where: object
    })
}

var checkExistUsername = (username) => {
    return Users.findOne({
        where: {
            Username: username
        }
    });
}

var changePassword = (newPass, id) => {
    return Users.update({
        Password: newPass
    }, {
            where: {
                Id: id
            }
        });
}

exports.getAll = getAll;
exports.getById = getById;
exports.create = create;
exports.update = update;
exports.login = login;
exports.checkExistUsername = checkExistUsername;
exports.changePassword = changePassword;