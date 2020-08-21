const { searchProducts } = require('../../application/use_cases/searchproducts')
const productsRepository = require('../repositories/search')
const { isValidPattern } = require('../validators/searchvalidator')

const getProducts = async (req, res, next) => {
  const { pattern } = req.query

  if(!isValidPattern(pattern)) {
    res.status(400).json({ message: 'Invalid search pattern' })
    return next(false)
  }

  const response = await searchProducts(productsRepository, pattern)
  if (response === undefined) {
    res.status(500).json({ message: 'Error interno' })
    return next(false)
  } else {
    res.status(200).json(response)
    return next()
  }
}

module.exports = { getProducts }
