const express = require("express");
const app = express();
const { dateParser } = require('./utils/parser.js')

const port = 3000;

app.use(express.json());
app.set('json spaces', 4);

app.get('/', (req, res) => {
    res.status(200);
    res.send(`Hello world, I'm listening`);
});

app.get('/api/:date?', (req, res) => {
    const date = dateParser(req.params.date);
    res.json(date);
});

app.listen(port, () => {
    console.log(`Server ready`);
  });