const request = require('supertest')
const app = require('index')

describe('Health Endpoint', () => {
  afterEach(async () => await app.close())

  it('should return status code 200 with empty body', async () => {
    const res = await request(app)
      .get('/health')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({})
  })
})
