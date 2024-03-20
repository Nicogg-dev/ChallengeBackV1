const route = require('express').Router();
const { getAllProductsWithStock, getSpecialPriceAndBrand, createProduct } = require('../../src/controllers/productController');
const { productValidationRules } = require('../../src/utils/validators/product');

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Operaciones relacionadas para los productos
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtener todos los productos con stock
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: productos con stock
 *         content:
 *           application/json:
 *             example:
 *               ok: true
 *               products: 
 *                - id: 60f5a0c7d4f4b2b1f0d7b1b7
 *                  stock: 10
 *                  price: 100
 *                  special_price: 159
 *                  brand: "Adidas"
 *                  slug: "Camiseta"
 */
route.get('/products', getAllProductsWithStock);


/**
 * @swagger
 * /price/{user_id}:/{nombre_producto}:
 *   get:
 *     summary: Obtener el precio especial para el cliente y la marca, si no tiene precio especial, devuelve precio base.
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: precio y marca
 *         content:
 *           application/json:
 *             example:
 *               ok: true
 *               price: 100
 *               brand: "Adidas"
 */
route.get('/price/:user_id/:nombre_producto', getSpecialPriceAndBrand)


/**
 * @swagger
 * /products:
 *   post:
 *     summary: Agregar un nuevo producto.
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: producto
 *         content:
 *           application/json:
 *             example:
 *                  stock: 10
 *                  price: 100
 *                  special_price: 159
 *                  brand: "Adidas"
 *                  slug: "Camiseta"
 * 
 */
route.post('/products', productValidationRules, createProduct);


module.exports = route;