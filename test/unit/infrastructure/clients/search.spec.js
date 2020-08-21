jest.mock('axios')
const axios = require('axios')

const { getProducts } = require('infrastructure/clients/search')

describe('Clients:Search', () => {
  it('should request to getProducts endpoint with provided search pattern', async () => {
    process.env['SEARCH_SERVICE_URL'] = 'foobar'
    axios.get.mockImplementation(() => true)

    const result = await getProducts('hello+world')

    expect(axios.get).toHaveBeenCalledWith('foobar/search?pattern=hello+world')
  })
})
