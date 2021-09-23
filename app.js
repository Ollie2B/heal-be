const express = require('express')
const cors = require('cors');
const port = 4000
const app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen((process.env.PORT || 4000), () => {
  console.log(`App is listening!`)
});
