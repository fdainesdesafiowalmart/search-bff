const request = require('supertest')
const app = require('index')

describe('Health Endpoint', () => {
  const contextUrl = '/search-bff/v1'

  afterEach(async () => await app.close())

  it('should return status code 200 with empty body', async () => {
    const res = await request(app)
      .get(contextUrl + '/health')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({})
  })
})
