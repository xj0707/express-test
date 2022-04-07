const express = require('express')
const app = express()
const port = 3002

const mw = require('./middleware/my-middleware')

// 托管静态文件 可以直接访问public目录下的资源
app.use(express.static('public'))
app.use(express.static('files')) // 可加载多个
app.use('/static', express.static('static')) // 可指定前缀

/**
 * 最好这样写，保证目录的路径最安全
 * const path = require('path')
 * app.use('/static', express.static(path.join(__dirname, 'public')))
 */

// 中间件
app.use(function (req, res, next) {
    console.log('我是中间件')
    next()
})

app.use(mw({ a: 1 }))


app.get('/', (req, res) => {
    throw { code: -1, message: '发生错误' }
    res.send('hello!')
})
app.get('/user/:id', (req, res) => {
    res.send(req.params)
})
app.post('/', (req, res) => {
    res.send('hello!')
})
app.put('/user', (req, res) => {
    res.send('hello!')
})
app.delete('/user', (req, res) => {
    res.send('hello!')
})

// 404 
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

// 捕获错误
app.use(function (err, req, res, next) {
    console.error(err)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})