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
    db.Crypto.findAll({}).then(dbCrypto => {
      const data = encodeURIComponent(JSON.stringify(dbCrypto));
      console.log({ data });
      res.render('crypto', {
        transaction_date: dbCrypto[0].dataValues.transaction_date,
        transaction_type: dbCrypto[0].dataValues.transaction_type,
        coin_name: dbCrypto[0].dataValues.coin_name,
        coin_symbol: dbCrypto[0].dataValues.coin_symbol,
        coin_price: dbCrypto[0].dataValues.coin_price,
        coin_quantity: dbCrypto[0].dataValues.coin_quantity,
        chart_data: data,
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
