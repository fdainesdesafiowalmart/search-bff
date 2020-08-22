const express = require('express')
const router = express.Router()

const { checkApiKey } = require('../middlewares/checkapikey')
const { healthCheck } = require('../controllers/health')
const { getProducts } = require('../controllers/search')

/**
* @swagger
* /health:
*   get:
*     description: Use to check the service status
*     responses:
*       '200':
*         description: A successful response, the service is up and running
*       'other':
*         description: A failed response, the service is down
*/
router.get('/health', healthCheck)

/**
* @swagger
* /search:
*   get:
*     description: Search for products based on pattern
*     responses:
*       '200':
*         description: The service returns the list of products that satisfies the search condition
*         schema:
*           type: object
*           properties:
*             total:
*               type: integer
*               description: The number of products that satisfies the search condition
*             totalPages:
*               type: integer
*               description: The number of result pages
*             products:
*               type: array
*               description: The list of products that satisfies the search condition
*               items:
*                 type: object
*                 properties:
*                   id:
*                     type: integer
*                     description: The product id
*                   brand:
*                     type: string
*                     description: The product brand
*                   description:
*                     type: string
*                     description: The product description
*                   image:
*                     type: string
*                     description: The product image URL
*                   price:
*                     type: integer
*                     description: The product price
*/
router.get('/search', checkApiKey, getProducts)

module.exports = router
