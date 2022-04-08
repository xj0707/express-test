const express = require('express')
const app = express()
const port = 3000

const user = require('./router/user')
const webhooks = require('./router/webhooks')
// 路由加载
app.use('/user', user)
app.use('/webhooks', webhooks)



app.listen(port, () => {
    console.log(`server listening port ${port}`)
})