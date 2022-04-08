const express = require('express')
const router = express.Router()

// 特定此路由的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send('webhooks')
})


module.exports = router