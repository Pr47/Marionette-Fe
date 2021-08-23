const express = require('express')
const { privileged } = require('./priv.js')
const { typeAssert } = require('./typeAssert.cjs')

const route = express.Router()

route.use(privileged)

route.post('/create', (req, res) => {
  const assertion = {
    name: 'string'.sumWith('undefined'),
    repo: 'string',
    branch: 'string'.sumWith('undefined'),
    commit: 'string'.sumWith('undefined'),
    script: 'string'.sumWith('undefined')
  }

  try {
    typeAssert(req.body, assertion)
    res.json({ success: true, message: '', result: '114-514-1919-810' })
  } catch (typeAssertError) {
    res.json({ success: false, message: typeAssertError })
  }
})

route.post('/cancel', (req, res) => {
  const assertion = { id: 'string' }

  try {
    typeAssert(req.body, assertion)
    res.json({ success: true, message: '' })
  } catch (typeAssertError) {
    res.json({ success: false, message: typeAssertError })
  }
})

route.get('/status', (req, res) => {
  const assertion = { id: 'string' }

  try {
    typeAssert(req.query, assertion)
    res.json({
      success: true,
      message: '',
      result: {
        id: req.query.id,
        name: '特殊任务',
        repo: 'https://github.com/Pr47/Pr47',
        branch: 'master',
        commit: 'cbcdd2z',
        script: 'full-task.bash'
      }
    })
  } catch (typeAssertError) {
    res.json({ success: false, message: typeAssertError })
  }
})

route.get('/list', (req, res) => {
  const assertion = { page: 'number' }

  try {
    typeAssert(req.query, assertion)
    res.json({
      success: true,
      message: '',
      result: [
        {
          id: '7355608',
          name: '特殊任务',
          repo: 'https://github.com/Pr47/Pr47',
          branch: 'master',
          commit: 'cbcdd2z',
          script: 'full-task.bash'
        },
        {
          id: '7355609',
          name: '特殊任务',
          repo: 'https://github.com/Pr47/Pr47',
          branch: 'master',
          commit: 'cbcdd2z',
          script: 'full-task.bash'
        },
        {
          id: '7355610',
          name: '特殊任务',
          repo: 'https://github.com/Pr47/Pr47',
          branch: 'master',
          commit: 'cbcdd2z',
          script: 'full-task.bash'
        }
      ]
    })
  } catch (typeAssertError) {
    res.json({ success: false, message: typeAssertError })
  }
})

module.exports = route
