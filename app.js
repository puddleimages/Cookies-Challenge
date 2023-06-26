const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/login', (req, res) => {
  const name = req.query.name; // Retrieve the name from the query parameters
  res.cookie('name', name); // Set the 'name' cookie
  res.send('Cookie set successfully!');
});

app.get('/hello', (req, res) => {
  const name = req.cookies.name; // Retrieve the 'name' cookie
  if (name) {
    res.send(`Welcome ${name}!`);
  } else {
    res.send('Please login first.');
  }
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
