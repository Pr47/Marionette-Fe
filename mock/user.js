const express = require('express')
const { privileged } = require('./priv')
const { typeAssert } = require('./typeAssert.cjs')

const route = express.Router()

route.use(privileged)

route.post('/create', (req, res) => {
    const assertion = {
        userName: 'string',
        password: 'string',
        privilege: 'number'
    }

    try {
        typeAssert(req.body, assertion)
        res.json({ success: true, message: '' })
    } catch (typeAssertError) {
        res.json({ success: false, message: typeAssertError })
    }
})

route.get('/info', (req, res) => {
    const assertion = { userName: 'string' }
    try {
        typeAssert(req.query, assertion)
        res.json({
            success: true,
            message: '',
            result: {
                userName: req.query.userName,
                privilege: '3'
            }
        })
    } catch (typeAssertError) {
        res.json({ success: false, message: typeAssertError })
    }
})

module.exports = route
