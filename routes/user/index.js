const route = require('express').Router();
const { getAllUsers, createUser} = require('../../src/controllers/userController');
const { userValidationRules } = require('../../src/utils/validators/user');

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Operaciones relacionadas para los productos
 */


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Usuarios
 *         content:
 *           application/json:
 *             example:
 *               ok: true
 *               Users: 
 *                - id: 60f5a0c7d4f4b2b1f0d7b1b7
 *                  name: "Juan"
 *                  discount_brand: ["Adidas","Nike"]
 */
route.get('/users',getAllUsers);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear usuario
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Usuarios
 *         content:
 *           application/json:
 *             example:
 *               name: "Juan"
 *               discount_brand: ["Adidas","Nike"]
 */
route.post('/users',userValidationRules, createUser )


module.exports = route;