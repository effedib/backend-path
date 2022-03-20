const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log('listening');
    res.status(200);
    res.send('correct request');
});

app.get('/api/:date', (req, res) => {
    const date = new Date(req.params.date);
    console.log(date);
    res.json(date)
});

app.listen(port, () => {
    console.log("Server ready");
  });