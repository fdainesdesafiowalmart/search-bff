const axios = require('axios')

const resolveApiKeyHeaders = () => {
  const apiKeyHeader = process.env.SEARCH_SERVICE_APIKEY_HEADER || 'x-walmart-search-service-key'

  const headers = {}
  headers[apiKeyHeader] = process.env.SEARCH_SERVICE_APIKEY_VALUE

  return {
    headers
  }
}

const resolveRequestParams = (pattern, orderby) => {
  return {
    ...resolveApiKeyHeaders(),
    params: {
      pattern: pattern,
      orderby: orderby
    }
  }
}

const getProducts = async (pattern) => {
  const productsServiceUrl = process.env.SEARCH_SERVICE_URL
  const endpoint = `${productsServiceUrl}/search`

  return axios.get(endpoint, resolveRequestParams(pattern))
}

module.exports = {
  getProducts
}
