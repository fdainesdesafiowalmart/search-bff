jest.mock('infrastructure/repositories/search')
const repositoryMock = require('infrastructure/repositories/search')

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

      const res = await request(app)
        .get('/search')
        .query({ pattern: 'Test1' })

      expect(res.statusCode).toEqual(200)
      expect(res.body).toStrictEqual(baseResponse)
    })

    it('should return status code 500 when an error occurred ', async () => {
      repositoryMock.findProducts.mockImplementation(() => {
        throw new Error('something bad')
      })

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

      const res = await request(app)
        .get('/search')

      expect(res.statusCode).toEqual(400)
      expect(res.body).toStrictEqual({ message: 'Invalid search pattern' })
    })

  })
})
