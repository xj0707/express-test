module.exports = function (options) {
    return function (req, res, next) {
        // 逻辑处理
        console.log('我自定义的中间件')
        next()
    }
}