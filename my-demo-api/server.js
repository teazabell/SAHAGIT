let express = require('express')
let app = express()
let books = require('./model/books')
let users = require('./model/users')
let orders = require('./model/orders')

var bodyParser = require('body-parser');
var port = process.env.PORT || 7777;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});

app.get('/', (req, res) => {
    res.send('Welcome to Books Store')
})

app.get('/books', (req, res) => {
    res.json(books)
  })

app.get('/books/:id', (req, res) => {
    res.json(books.find(book => book.bookId === req.params.id))
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).json(req.body)
})

app.put('/books/:id', (req, res) => {
    const updateIndex = books.findIndex(book => book.bookId === req.params.id)
    res.json(Object.assign(books[updateIndex], req.body))
})

app.delete('/books/:id', (req, res) => {
    const deletedIndex = books.findIndex(book => book.bookId === req.params.id)
    books.splice(deletedIndex, 1)
    res.status(204).send()
})

app.get('/users', (req, res) => {
    res.json(users)
  })

app.get('/users/:id', (req, res) => {
    res.json(users.find(user => user.id === req.params.id))
})

app.post('/users', (req, res) => {
    users.push(req.body)
    res.status(201).json(req.body)
})

app.put('/users/:id', (req, res) => {
    const updateIndex = users.findIndex(user => user.id === req.params.id)
    res.json(Object.assign(users[updateIndex], req.body))
})

app.delete('/users/:id', (req, res) => {
    const deletedIndex = users.findIndex(user => user.id === req.params.id)
    users.splice(deletedIndex, 1)
    res.status(204).send()
})