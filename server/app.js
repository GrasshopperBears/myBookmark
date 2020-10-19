const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
const passport = require('passport');

dotenv.config();
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || process.env.SERVER_PORT);
  })
  .catch((err) => console.log(err));
