const searchProducts = async ({ findProducts }, pattern) => {
  try {
    const resolvedProducts = await findProducts(pattern)

    return resolvedProducts
  } catch (error) {
    return undefined
  }
}

module.exports = {
  searchProducts
}
