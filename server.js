const express = require('express')
const people = require('./people.json')

const app = express();
app.set('view engine','pug')

app.use(express.static(__dirname+'/public'))

const server = app.listen(3000,() => {
    console.log(`Server started on port ${server.address().port}`)
})


app.get('/',(req,res) => {
    res.render('index',{
        title:'Homepage',
        name : "john",
        people: people.profiles
    })
})

