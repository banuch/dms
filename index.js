const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Here you would typically validate the username and password
  // and perform authentication, then redirect the user accordingly
  // For the sake of this example, let's just send a response indicating success
  res.send('Login successful!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
