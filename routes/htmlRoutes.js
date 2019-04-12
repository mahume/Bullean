const moment = require('moment');
const db = require('../models');

module.exports = app => {
  // Load index page
  app.get('/', (req, res) => {
    db.Crypto.findAll({}).then(dbExamples => {
      res.render('index', {});
    });
  });
  // Crypto
  app.get('/crypto', (req, res) => {
    db.Crypto.findAll({}).then(dbCrypto => {
      console.log(dbCrypto);
      res.render('crypto', {
        data: dbCrypto,
      });
    });
  });
  // Real Estate
  app.get('/real-estate', (req, res) => {
    db.RealEstate.findAll({}).then(dbRealEstate => {
      res.render('real-estate', {
        data: dbRealEstate,
      });
    });
  });
  // Stocks
  app.get('/stocks', (req, res) => {
    db.Stocks.findAll({}).then(dbStocks => {
      res.render('stocks', {
        data: dbStocks,
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
