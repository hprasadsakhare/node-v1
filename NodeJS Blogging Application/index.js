const express = require('express');

const app = express();
cosnt PORT = 8000;


app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));