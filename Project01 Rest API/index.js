const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();

const PORT = 8000;

// REST API
app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

// Fetch user by ID
app.get("/api/users/:id", (req, res) => {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);

   // Handle user not found
   if (!user) {
       return res.status(404).json({ error: 'User not found' });
   }

   return res.json(user);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
