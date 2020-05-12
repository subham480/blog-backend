const { check } = require('express-validator');

exports.categoryTagValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
];
