const express = require('express')
const app = express();

const server = app.listen(7000,() => {
    console.log(`Server started on port ${server.address().port}`)
})


app.get('/',(req,res) => {
    res.render('index',{
        title:'Homepage',
        name : "john"
    })
})

app.set('view engine','pug')

app.use(express.static(__dirname+'/public'))