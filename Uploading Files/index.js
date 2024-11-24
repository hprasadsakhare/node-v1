const path = require('path');
const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 8000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

// Middleware for parsing URL-encoded data and handling file uploads
app.use(express.urlencoded({ extended: true }));

// Set up Multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Files will be saved to the 'uploads' directory

// Render homepage
app.get('/', (req, res) => {
    return res.render('homepage');
});

// Handle file upload
app.post('/upload', upload.single('profileImage'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    return res.send(`File uploaded successfully: ${req.file.originalname}`);
    console.log(req.file);
    console.log(req.body);
    return res.redirect('/');
});

// Start server
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
