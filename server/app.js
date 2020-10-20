const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
const sequelize = require('./models/model');
const passport = require('passport');
const passportConfig = require('./config/index');
const modelsConfig = require('./models');

dotenv.config();
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passportConfig();
modelsConfig();

app.use(require('./routes/auth'));

sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || process.env.SERVER_PORT);
  })
  .catch((err) => console.log(err));
