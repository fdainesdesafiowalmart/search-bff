const configuration = {
  application: {
    id: 'search-bff',
    name: 'Search BFF',
    prefixURL: '/search-bff/v1',
    port: process.env.PORT || 3000,
    logLevel: process.env.LOG_LEVEL || 'debug'
  }
}

module.exports = configuration
