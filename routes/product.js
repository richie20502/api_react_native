const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Lists all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The auto-generated id of the product
 *                   name:
 *                     type: string
 *                     description: The name of the product
 *                   description:
 *                     type: string
 *                     description: The description of the product
 *                   price:
 *                     type: number
 *                     description: The price of the product
 *                   category:
 *                     type: string
 *                     description: The category of the product
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The date the product was created
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: The date the product was last updated
 *                 example:
 *                   _id: '60c72b2f9b1d8c1b8c8b4567'
 *                   name: 'Example Product'
 *                   description: 'This is an example product'
 *                   price: 29.99
 *                   category: 'example-category'
 *                   createdAt: '2021-06-13T21:20:31.000Z'
 *                   updatedAt: '2021-06-13T21:20:31.000Z'
 */
router.get('/', productController.listProducts);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product
 *               description:
 *                 type: string
 *                 description: The description of the product
 *               price:
 *                 type: number
 *                 description: The price of the product
 *               category:
 *                 type: string
 *                 description: The category of the product
 *             example:
 *               name: 'Example Product'
 *               description: 'This is an example product'
 *               price: 29.99
 *               category: 'example-category'
 *     responses:
 *       201:
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The auto-generated id of the product
 *                 name:
 *                   type: string
 *                   description: The name of the product
 *                 description:
 *                   type: string
 *                   description: The description of the product
 *                 price:
 *                   type: number
 *                   description: The price of the product
 *                 category:
 *                   type: string
 *                   description: The category of the product
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The date the product was created
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: The date the product was last updated
 *               example:
 *                 _id: '60c72b2f9b1d8c1b8c8b4567'
 *                 name: 'Example Product'
 *                 description: 'This is an example product'
 *                 price: 29.99
 *                 category: 'example-category'
 *                 createdAt: '2021-06-13T21:20:31.000Z'
 *                 updatedAt: '2021-06-13T21:20:31.000Z'
 *       400:
 *         description: Bad request
 */
router.post('/', productController.createProduct);

module.exports = router;
