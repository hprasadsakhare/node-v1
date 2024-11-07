const express = require('express');
const userRouter = require('./routes/user.routes')

const app = express();

app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render("index");
// });

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
