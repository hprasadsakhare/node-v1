const express = require('express');
const morgan = require('morgan');
const app = express();
const dbConnection = require('./config/db')
const userModel = require('./models/user')

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/about', (req, res) => {
    res.end('about page');
});

app.get('/profile', (req, res) => {
    res.end('profile page');
});

app.get('/register',(req, res) =>{
     res.render('register')
})

app.post('/register',async (req, res) =>{

    const {username, email, password} = req.body;
     
    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send(newUser);
})

app.get('/get-users',(req,res) =>{
    userModel.findOne({
        username: 'c'
    }).then((users)=>{
    res.send(users)
    })
})

app.get('/update-user',async (req,res) =>{
    await userModel.findOneAndUpdate({
        username: 'a'
    },{
        email: "c@c.com"
    })
    res.send("user update")
})

app.get('/delete-user', async(req,res)=>{
    await userModel.findOneAndDelete({
        username: "a"
    })
    res.send("user delete")
})


app.post('/get-form-data', (req, res) => {
    console.log(req.body); 
    res.send('Data received');
});



app.listen(3002, () => {
    console.log('Server is running on http://localhost:3002');
});
