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

router.get('/search', checkApiKey, getProducts)

module.exports = router
