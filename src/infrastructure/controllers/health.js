const healthCheck = (req, res, next) => {
  res.status(200).send()
  return next()
}

module.exports = { healthCheck }
