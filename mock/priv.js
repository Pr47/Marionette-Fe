const { typeAssert } = require('./typeAssert.cjs')
const cfgattr = require('../src/config/cfgattr.json')

const fakeCred = (() => {
  const ret = {}
  for (const cred of cfgattr.creds) {
    ret[cred.key] = '114-514-1919-810'
  }
  return ret
})()

const credAssertion = (() => {
  const ret = {}
  for (const cred of cfgattr.creds) {
    ret[cred.header.toLowerCase()] = 'string'
  }
  return ret
})()

const privileged = (req, res, next) => {
  try {
    typeAssert(req.headers, credAssertion)
  } catch (typeAssertError) {
    res.status(401).json({ success: false, message: typeAssertError })
    return
  }
  next()
}

module.exports = {
  fakeCred,
  privileged
}
