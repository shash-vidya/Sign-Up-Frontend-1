const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const signupRoute = require('./routes/signup');
require('./models/user'); // Register model

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', signupRoute);

// Sync DB and start server
sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server running at http://localhost:3000');
    });
  })
  .catch((err) => console.error('Error syncing DB:', err));
