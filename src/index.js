const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars=require('express-handlebars')
const app = express()
const port = 3000

const route = require('../src/routes')

const db = require('./config/db')

//db.connect()
db.connect()
app.use(express.static(path.join(__dirname, 'public')))

// middelware 
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//HTTP logger 
app.use(morgan('combined'))

//Template engine
//app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// app.get('/', (req, res) => {
//     //res.send('Hello World!')
//     res.render('home')
// })

// app.get('/news', (req, res) => {
//     res.render('news')
// })

// app.get('/search', (req, res) => {
//     res.render('search')
// })

// app.post('/search', (req, res) => {
//     //res.render('search')
//     console.log(req.body);
//     res.send('')
// })

route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})