const express = require('express');
const cors = require('cors');
require('./src/database');
const app = express();
const { swaggerDocs } = require('./swagger/swagger');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
//rutas
app.use(require('./routes/product/index'));
app.use(require('./routes/user/index'));


swaggerDocs(app,PORT);

app.listen(PORT);