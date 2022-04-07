const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://xxx', function (err, client) {
    if (err) throw err
    const db = client.db('xx')

    db.collection('xx').find().toArray(function (err, result) {
        if (err) throw err
        console.log(result)
    })
})
