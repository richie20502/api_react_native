const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors()); 

require('./config/database');

const swaggerSetup = require('./docs/swagger');
swaggerSetup(app);

const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
