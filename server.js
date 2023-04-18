const express = require('express')
const app = express();

const server = app.listen(7000,() => {
    console.log(`Server started on port ${server.address().port}`)
})


app.get('/',(req,res) => {
    res.render('index')
})

app.set('view engine','pug')