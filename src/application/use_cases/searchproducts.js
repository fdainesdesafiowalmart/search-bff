const searchProducts = async ({ findProducts }, { pattern, pageSize, page }) => {
  try {
    if(pageSize===undefined || pageSize===null) pageSize = 12
    if(page===undefined || page===null) page = 1
    
    const resolvedProducts = await findProducts(pattern)
    const startIndex = pageSize * (page-1)
    const endIndex = pageSize * (page)

    const result = {
      total: resolvedProducts.total,
      totalPages: Math.ceil(resolvedProducts.total / pageSize),
      products: resolvedProducts.products.slice(startIndex, endIndex)
    }
    return result
  } catch (error) {
    return undefined
  }
}

module.exports = {
  searchProducts
}
