const db = require('../models');

module.exports = app => {
  // Load index page
  app.get('/', (req, res) => {
    db.Crypto.findAll({}).then(dbExamples => {
      res.render('index', {
        msg: 'Welcome!',
        examples: dbExamples,
      });
    });
  });
  // Crypto
  app.get('/crypto', (req, res) => {
    db.Crypto.findAll({}).then(dbExamples => {
      res.render('crypto', {
        msg: 'Welcome!',
        examples: dbExamples,
      });
    });
  });
  // Real Estate
  app.get('/real-estate', (req, res) => {
    db.RealEstate.findAll({}).then(dbExamples => {
      res.render('real-estate', {
        msg: 'Welcome!',
        examples: dbExamples,
      });
    });
  });
  // Stocks
  app.get('/stocks', (req, res) => {
    db.Stocks.findAll({}).then(dbExamples => {
      res.render('stocks', {
        msg: 'Welcome!',
        examples: dbExamples,
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
