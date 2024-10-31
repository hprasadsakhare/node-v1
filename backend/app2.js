const express = require ('express');
const morgan = require ('morgan');
const app = express()

app.use(morgan('dev'))

app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.end('about page')
})

app.get('/profile',(req,res)=>{
    res.end('profile page')
})

app.listen(3002)