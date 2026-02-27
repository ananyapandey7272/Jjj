const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (css.css, script.js, etc.)
app.use(express.static(path.join(__dirname)));

// Home route → ashish.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'ashish.html'));
});

// Contact form route
app.post('/contact', (req, res) => {
  const { name, phone, message } = req.body;
  console.log('Contact Form:', { name, phone, message });
  res.json({ success: true, message: 'Message received!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
