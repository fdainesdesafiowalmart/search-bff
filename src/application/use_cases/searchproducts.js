const prepareSearchParameters = (orderby, pageSize, page) => {
  if(pageSize===undefined || pageSize===null) pageSize = 12
  if(page===undefined || page===null) page = 1

  let sortCriteria = orderby
  if(orderby==undefined || orderby ===null || orderby.trim()===''){
    sortCriteria = 'id'
  }

  return {
    pageSize: pageSize,
    page: page,
    orderby: sortCriteria
  }
}

const searchProducts = async ({ findProducts }, { pattern, orderby, pageSize, page }) => {
  try {
    const searchParameters = prepareSearchParameters(orderby, pageSize, page)

    const resolvedProducts = await findProducts(pattern, searchParameters.orderby)
    const startIndex = searchParameters.pageSize * (searchParameters.page-1)
    const endIndex = searchParameters.pageSize * (searchParameters.page)

    const result = {
      total: resolvedProducts.total,
      totalPages: Math.ceil(resolvedProducts.total / searchParameters.pageSize),
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
