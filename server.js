require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');

const db = require('./models');

// Set up Express
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
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

// ROUTES
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

const syncOptions = { force: true };

if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}

// Sync Sequelize Models, Start express app
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
});

module.exports = app;
