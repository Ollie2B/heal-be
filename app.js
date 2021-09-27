const express = require('express')
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('El Back quedó arriba --> '+ port)
});

app.listen(port, () => {
  console.log('Escuchando! ' + port)
});
