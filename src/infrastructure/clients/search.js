const axios = require('axios')

const getProducts = async (pattern) => {
  const productsServiceUrl = process.env.SEARCH_SERVICE_URL
  const endpoint = `${productsServiceUrl}/search?pattern=${pattern}`

  return axios.get(endpoint)
}

module.exports = {
  getProducts
}
