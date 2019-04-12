require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');

// Handlebar helpers
const Handlebars = require('handlebars');
// Parse Dates & Currency
const HandlebarsIntl = require('handlebars-intl');

HandlebarsIntl.registerWith(Handlebars);

const db = require('./models');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
  })
);
app.set('view engine', 'handlebars');

// Routes
require('./routes/cryptoRoutes')(app);
require('./routes/realEstateRoutes')(app);
require('./routes/stocksRoutes')(app);
require('./routes/htmlRoutes')(app);

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});

module.exports = app;
