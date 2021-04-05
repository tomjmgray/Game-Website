const express = requrie('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

app.use(bodyPatrser.json());
app.use(cors());

app.listen(PORT, () => console.log(`API server running on ${PORT}.`));