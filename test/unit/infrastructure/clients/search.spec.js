jest.mock('axios')
const axios = require('axios')

const { getProducts } = require('infrastructure/clients/search')

describe('Clients:Search', () => {
  it('should request to getProducts endpoint with provided search pattern', async () => {
    process.env['SEARCH_SERVICE_URL'] = 'foobar'
    process.env['SEARCH_SERVICE_APIKEY_VALUE'] = 'bar'
    process.env['SEARCH_SERVICE_APIKEY_HEADER'] = 'foo'
    axios.get.mockImplementation(() => true)

    const pattern = 'hello+world'

    const expectedParams = {
      headers: {
        'foo': 'bar'
      },
      params: {
        pattern: pattern,
        orderby: undefined
      }
    }

    const result = await getProducts(pattern)

    expect(axios.get).toHaveBeenCalledWith('foobar/search', expectedParams)
  })
})
