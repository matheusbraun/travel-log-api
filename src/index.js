const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(morgan('common'));
app.use(helmet());

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
