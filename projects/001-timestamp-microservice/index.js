const express = require("express");
const app = express();
const { dateParser } = require('./utils/parser.js')

const port = 3000;

app.use(express.json());
app.set('json spaces', 4);

app.get('/', (req, res) => {
    console.log('listening');
    res.status(200);
    res.send('Hello world');
});

app.get('/api/:date', (req, res) => {
    const date = dateParser(req.params.date);
    res.json(date);
});

app.listen(port, () => {
    console.log("Server ready");
  });