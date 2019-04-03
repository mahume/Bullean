const express = require('express');

// Set up Express
const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// ROUTES
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Sync Sequelize Models, Start express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
});
