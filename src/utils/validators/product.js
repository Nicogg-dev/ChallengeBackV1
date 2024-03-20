const { check } = require('express-validator');

const productValidationRules = [
    check('stock').notEmpty().withMessage('Stock is required').isNumeric().withMessage('Stock must be a numeric value'),
    check('price').notEmpty().withMessage('Price is required').isNumeric().withMessage('Price must be a numeric value'),
    check('special_price').notEmpty().withMessage('Special price is required').isNumeric().withMessage('Special price must be a numeric value'),
    check('brand').notEmpty().withMessage('Brand is required'),
    check('slug').notEmpty().withMessage('Slug is required')
];

module.exports = { productValidationRules };