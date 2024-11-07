const express = require('express');
const userRouter = require('./routes/user.routes');

const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Use userRouter for '/user' routes
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
