const isValidPattern = (pattern) => {
  if(pattern === undefined) return false
  if(pattern === null) return false
  if(pattern.trim().length===0) return false
  return true
}

module.exports = { isValidPattern }
