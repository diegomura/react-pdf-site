const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port);
console.log(`Server running in port ${port}`);
