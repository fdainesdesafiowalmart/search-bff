const { searchProducts } = require('../../application/use_cases/searchproducts')
const productsRepository = require('../repositories/search')

const getProducts = async (req, res, next) => {
  const { query } = req

  const response = await searchProducts(productsRepository, query.pattern)
  if (response === undefined) {
    res.status(500).json({ message: 'Error interno' })
    return next(false)
  } else {
    res.status(200).json(response)
    return next()
  }
}

module.exports = { getProducts }
