const { check } = require('express-validator');

const userValidationRules = [
    check('name').notEmpty().withMessage('Name is required'),
    check('discount_brand').isArray().withMessage('Discount brand must be an array')
];

module.exports = { userValidationRules };