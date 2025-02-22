const { getProducts } = require('../clients/search')

const findProducts = async (pattern, orderby) => {
  try {
    const response = await getProducts(pattern, orderby)

    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log('Error: ' + error)
  }

  return {
    total: 0,
    products: []
  }
}

module.exports = {
  findProducts
}
