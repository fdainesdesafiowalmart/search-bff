const { findProducts } = require('infrastructure/repositories/search')
jest.mock('infrastructure/clients/search')
const searchMock = require('infrastructure/clients/search')

describe('Repositories:Search', () => {
  describe('findProducts', () => {
    beforeEach(() => {
      searchMock.getProducts.mockClear()
    })

    it('should return products service response', async () => {
      const expectedResponse = {
        total: 1,
        products: [{
          id: 999,
          brand: 'pyu endkewc',
          description: 'nror djnomitn',
          image: 'www.lider.cl/catalogo/images/toysIcon.svg',
          price: 805698
        }]
      }
      const returnedFromService = {
        status: 200,
        data: {
          total: 1,
          products: [{
            id: 999,
            brand: 'pyu endkewc',
            description: 'nror djnomitn',
            image: 'www.lider.cl/catalogo/images/toysIcon.svg',
            price: 805698
          }]
        }
      }

      searchMock.getProducts.mockReturnValue(returnedFromService)

      const response = await findProducts('foobar')

      expect(response).toStrictEqual(expectedResponse)
    })

    it('should return empty response when service response has status != 200', async () => {
      const returnedFromService = {
        status: 500,
        data: {
          id: '1234'
        }
      }
      searchMock.getProducts.mockImplementation(() => {
        return returnedFromService
      })

      const expectedResponse = {
        total: 0,
        products: []
      }

      const response = await findProducts(1234)

      expect(response).toStrictEqual(expectedResponse)
    })

    it('should return empty response when an error occurred', async () => {
      const expectedResponse = {
        total: 0,
        products: []
      }

      searchMock.getProducts.mockImplementation(() => {
        throw new Error('some error')
      })

      const response = await findProducts('barfoo')

      expect(response).toStrictEqual(expectedResponse)
    })
  })
})
