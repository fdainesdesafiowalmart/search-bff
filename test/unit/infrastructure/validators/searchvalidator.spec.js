const { isValidPattern } = require('infrastructure/validators/searchvalidator')

describe('Validators:SearchPatterValidator', () => {
  it('should return false for undefined pattern', async () => {
    const pattern = undefined

    const result = isValidPattern(pattern)

    expect(result).toBe(false)
  })

  it('should return false for null pattern', async () => {
    const pattern = null

    const result = isValidPattern(pattern)

    expect(result).toBe(false)
  })

  it('should return false for empty pattern', async () => {
    const pattern = ''

    const result = isValidPattern(pattern)

    expect(result).toBe(false)
  })

  it('should return false for pattern of length 2', async () => {
    const pattern = 'He'

    const result = isValidPattern(pattern)

    expect(result).toBe(false)
  })

  it('should return false for pattern of length 3', async () => {
    const pattern = 'Foo'

    const result = isValidPattern(pattern)

    expect(result).toBe(true)
  })

  it('should return false for pattern with more than 3 characters', async () => {
    const pattern = 'Hello World'

    const result = isValidPattern(pattern)

    expect(result).toBe(true)
  })
})
