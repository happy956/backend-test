const express = require('express');
const cors = require('cors');

const port = 8000;
const app = express();
app.use(cors());

const ip = require('ip');
console.log(ip.address());

app.get('/', (req, res) => {
    return 'hello'
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});