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

  app.get('/crypto', (req, res) => {
    db.Crypto.findAll({}).then(dbExamples => {
      res.render('crypto', {
        msg: 'Welcome!',
        examples: dbExamples,
      });
    });
  });

  app.get('/real-estate', (req, res) => {
    db.RealEstate.findAll({}).then(dbExamples => {
      res.render('real-estate', {
        msg: 'Welcome!',
        examples: dbExamples,
      });
    });
  });
  app.get('/stocks', (req, res) => {
    db.Stocks.findAll({}).then(dbExamples => {
      res.render('stocks', {
        msg: 'Welcome!',
        examples: dbExamples,
      });
    });
  });

  // Load example page and pass in an example by id
  app.get('/example/:id', (req, res) => {
    db.Crypto.findOne({ where: { id: req.params.id } }).then(dbExample => {
      res.render('example', {
        example: dbExample,
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
