const configuration = {
  application: {
    id: 'search-bff',
    name: 'Search BFF',
    prefixURL: '/search-bff/v1',
    port: process.env.NODE_PORT || 8332,
    logLevel: process.env.LOG_LEVEL || 'debug'
  }
}

module.exports = configuration
