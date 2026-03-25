const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // serve HTML

app.post('/contact', (req, res) => {
  const data = req.body;
  fs.appendFile('messages.txt', JSON.stringify(data) + "\n", (err) => {
    if (err) return res.status(500).send('Error saving');
    res.send('Message saved successfully!');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
