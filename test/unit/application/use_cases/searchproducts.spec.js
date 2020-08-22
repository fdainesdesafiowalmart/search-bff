const { searchProducts } = require('application/use_cases/searchproducts')

describe('Application:UseCases', () => {
  describe('Search Products', () => {
    const mockResponse = {
      total: 1,
      totalPages: 1,
      products: [
        { foo: 'bar1', price: 100 }
      ]
    }
    const mockRepository = {
      findProducts: jest.fn()
    }

    it('should call findProducts to resolve response', async () => {
      mockRepository.findProducts.mockImplementation(() => {
        return { ...mockResponse }
      })
      const searchPattern = 'x1234'

      const result = await searchProducts(mockRepository, { pattern: searchPattern })

      expect(mockRepository.findProducts).toHaveBeenCalledWith(searchPattern)
      expect(result).toStrictEqual(mockResponse)
    })

    it('should return undefined when an error occurred', async () => {
      mockRepository.findProducts.mockImplementation(() => {
        throw new Error('error details')
      })
      const searchPattern = '123'

      const result = await searchProducts(mockRepository, { pattern: searchPattern })

      expect(mockRepository.findProducts).toHaveBeenCalledWith(searchPattern)
      expect(result).toBe(undefined)
    })

  })
})
