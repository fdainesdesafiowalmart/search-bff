const isValidPattern = (pattern) => {
  if(pattern === undefined) return false
  if(pattern === null) return false
  if(pattern.length<3) return false
  return true
}

module.exports = { isValidPattern }
