const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
})

connection.connect()
connection.query(``, function (err, rows, fields) {

})
connection.end()