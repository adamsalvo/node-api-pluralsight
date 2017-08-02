var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser')


var db = mongoose.connect('mongodb://localhost/book-api')
var Book = require('./models/bookModel')
var Author = require('./models/authorModel')
var app = express()
var port = process.env.PORT || 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

bookRouter = require('./routes/bookRoutes')(Book)
authorRouter = require('./routes/authorRoutes')(Author)


app.use('/api/books', bookRouter)
app.use('/api/authors', authorRouter)

app.get('/', function (req, res) {
    res.send('Welcome to my API!')
})

app.listen(port, function () {
    console.log('Running on PORT: ' + port)
})