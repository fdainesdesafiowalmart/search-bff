const { Response } = require('jest-express/lib/response')

const { healthCheck } = require('infrastructure/controllers/health')

describe('Controllers:Health', () => {
  it('should response with status code 200', async () => {
    const response = new Response()
    const nextMock = jest.fn();

    healthCheck({}, response, nextMock);

    expect(response.status).toBeCalledWith(200)
  })

  it('should call next function', async () => {
    const response = new Response()
    const nextMock = jest.fn();

    healthCheck({}, response, nextMock);

    expect(nextMock).toBeCalledWith()
  })
})
