const express = require('express');
const cors = require('cors');

const port = 8000;
const app = express();

const ip = require('ip');
console.log(ip.address());

app.get('/', (req, res) => {
    return 'hello'
})
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
});