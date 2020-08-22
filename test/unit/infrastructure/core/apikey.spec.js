const { isValidApiKey } = require('infrastructure/core/apikey')

describe('Core:ApiKey', () => {
  it('should return true for valid API KEY', async () => {
    const input = 'SEARCH_BFF_API_KEY'

    const returnValue = isValidApiKey(input);

    expect(returnValue).toBe(true)
  })

  it('should return false for valid API KEY', async () => {
    const input = 'foobar'

    const returnValue = isValidApiKey(input);

    expect(returnValue).toBe(false)
  })

  it('should return false for undefined API KEY', async () => {
    const input = undefined

    const returnValue = isValidApiKey(input);

    expect(returnValue).toBe(false)
  })

  it('should return false for null API KEY', async () => {
    const input = null

    const returnValue = isValidApiKey(input);

    expect(returnValue).toBe(false)
  })
})
