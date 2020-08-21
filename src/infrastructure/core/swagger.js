const express = require('express')
const router = express.Router()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Search Backend for Frontend',
      description: 'Backend for Frontend that exposes search functionalities to the Web Application',
      contact: {
        name: 'Francisco Daines'
      },
      servers: ['http://localhost']
    }
  },
  apis: ['**/routers/*.js']
}

const swaggerDocument = swaggerJsDoc(swaggerOptions)

router.use('/', swaggerUi.serve)
router.get('/', swaggerUi.setup(swaggerDocument))

module.exports = router
