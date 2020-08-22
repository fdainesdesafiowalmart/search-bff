const API_KEY = 'SEARCH_BFF_API_KEY'

const isValidApiKey = (value) => {
    return value === API_KEY
}

module.exports = { isValidApiKey }