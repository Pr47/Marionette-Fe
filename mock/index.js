const express = require('express')
const cors = require('cors')

const { typeAssert } = require('./typeAssert.cjs')

const { fakeCred } = require('./priv')
const taskAPI = require('./task')
const userAPI = require('./user')

const app = express()
const port = 3080

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  console.log('request url:', req.url)
  console.log('request method:', req.method)
  console.log('request headers:', req.headers)
  console.log('request query:', req.query)
  console.log('request body:', req.body)
  next()
})

app.post('/api/login', ({ body }, res) => {
  try {
    typeAssert(body, {
      userName: 'string'.chainWith(x => x.length !== 0 ? true : 'empty userName'),
      password: 'string'.chainWith(x => x.length !== 0 ? true : 'empty userName')
    })
  } catch (typeAssertError) {
    console.log('type assertion failed: ', typeAssertError)
    res.json({ success: false, message: typeAssertError })
    return
  }

  res.json({ success: true, message: '', result: fakeCred })
})

app.use('/api/task', taskAPI)
app.use('/api/user', userAPI)

app.listen(port, () => {
  console.log('application started')
})
