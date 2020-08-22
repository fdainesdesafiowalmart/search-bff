jest.mock('infrastructure/repositories/search')
const repositoryMock = require('infrastructure/repositories/search')

jest.mock('infrastructure/core/apikey')
const apiKeyMock = require('infrastructure/core/apikey')

const request = require('supertest')
const app = require('index')

describe('Search Endpoint', () => {
  afterEach(async () => await app.close())

  describe('GET /search', () => {
    it('should return status code 200 when search for a product pattern', async () => {
      const baseResponse = {
        total: 1,
        products: [
          { foo: 'bar', price: 1234 }
        ]
      }
      repositoryMock.findProducts.mockImplementation(() => {
        return { ...baseResponse }
      })
      apiKeyMock.isValidApiKey.mockImplementation(() => true)

      const expectedResponse = {
        ...baseResponse,
        totalPages: 1
      }

      const res = await request(app)
        .get('/search')
        .query({ pattern: 'Test1' })

      expect(res.statusCode).toEqual(200)
      expect(res.body).toStrictEqual(expectedResponse)
    })

    it('should return status code 500 when an error occurred ', async () => {
      repositoryMock.findProducts.mockImplementation(() => {
        throw new Error('something bad')
      })
      apiKeyMock.isValidApiKey.mockImplementation(() => true)

      const res = await request(app)
        .get('/search')
        .query({ pattern: 'Test1' })

      expect(res.statusCode).toEqual(500)
      expect(res.body).toStrictEqual({ message: 'Error interno' })
    })

    it('should return status code 400 when the search pattern is invalid', async () => {
      repositoryMock.findProducts.mockImplementation(() => {
        throw new Error('something bad')
      })
      apiKeyMock.isValidApiKey.mockImplementation(() => true)

      const res = await request(app)
        .get('/search')

      expect(res.statusCode).toEqual(400)
      expect(res.body).toStrictEqual({ message: 'Invalid search pattern' })
    })

    it('should return status code 401 when api key is not valid', async () => {
      repositoryMock.findProducts.mockImplementation(() => {
        return [{
          id: 9999,
          foo: 'bar'
        }]
      })
      apiKeyMock.isValidApiKey.mockImplementation(() => false)

      const res = await request(app)
        .get('/search')

      expect(res.statusCode).toEqual(401)
    })
  })
})
