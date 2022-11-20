const express = require('express');
const errorMiddleware = require('./middlewares/error');
require('express-async-errors');
const { loginRoute } = require('./routes');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

// ...
app.use(errorMiddleware);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
