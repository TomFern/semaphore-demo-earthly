
const express = require('express');
const app = express();
const port = 3000;

const hello = require('./hello.js');

app.get('/', (req, res) => {
    res.send(hello());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
