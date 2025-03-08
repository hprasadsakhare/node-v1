const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const app = express();

const PORT = 8000;

// Middleware - Plugins
app.use(express.json()); // To parse JSON request body
app.use(express.urlencoded({ extended: false })); // To parse URL-encoded body

app.use((req, res, next) => {
    console.log("hello from middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("hello from middleware 2");
    next();
});


// Get all users
app.get('/api/users', (req, res) => {
    return res.json(users);
});

// Render users in HTML
app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

// Fetch user by ID, Update user, Delete user
app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        return res.json(user);
    })
    .put((req, res) => {
        const id = Number(req.params.id);
        const index = users.findIndex((user) => user.id === id);
        
        if (index === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }


        users[index] = { ...users[index], ...req.body }; // Update user details
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ status: "error", message: err.message });
            }
            res.json({ status: "success", user: users[index] });
        });
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const index = users.findIndex((user) => user.id === id);
        
        if (index === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }

        users.splice(index, 1); // Remove user
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ status: "error", message: err.message });
            }
            res.json({ status: "success", message: "User deleted" });
        });
    });

// Add new user
app.post('/api/users', (req, res) => {
    const body = req.body;
    if (!body.first_name || !body.last_name || !body.email) {
        return res.status(400).json({ status: "error", message: "Missing required fields" });
    }

    const newUser = { ...body, id: users.length + 1 };
    users.push(newUser);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: err.message });
        }
        res.status(201).json({ status: "success", user: newUser });
    });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
