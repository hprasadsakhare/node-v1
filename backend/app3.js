const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.use(express.json())
app.use(express.urlencoded({extended:true}))


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


//app.get('/get-form-data', (req, res) => {
//    console.log(req.query); 
//    res.send('Data received');
//  });

app.post('/get-form-data', (req, res) => {
    console.log(req.body); 
    res.send('Data received');
});



app.listen(3002, () => {
    console.log('Server is running on http://localhost:3002');
});
