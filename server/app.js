const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
const sequelize = require('./models/model');
const passport = require('passport');
const cors = require('cors');
const passportConfig = require('./config/index');
const modelsConfig = require('./models');

dotenv.config();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '15mb' }));
app.use(passport.initialize({ limit: '15mb' }));
app.use(cors());
passportConfig();
modelsConfig();

app.use(require('./routes/auth'));
app.use(require('./routes/api'));

sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || process.env.SERVER_PORT);
  })
  .catch((err) => console.log(err));
