

const express = require ('express');
const app = express()

app.set('view engine','ejs')

app.use((req,res,next)=>{
    console.log("this is moddleware")
})

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