const express = require('express');
const app = express();
const port = 3001;

app.get('/api/profile', (req, res) => {
    res.json({
        name: "John Doe",
        bio: "A passionate developer.",
        email: "john.doe@example.com",
        phone: "987-654-3210",
        picture: "profile.jpg"
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});