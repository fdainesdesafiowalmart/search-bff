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

  it('should return true for valid pattern', async () => {
    const pattern = 'He'

    const result = isValidPattern(pattern)

    expect(result).toBe(true)
  })
})
