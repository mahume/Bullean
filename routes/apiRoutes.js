const db = require('../models');

module.exports = app => {
  // Get all cryptos
  app.get('/api/crypto', (req, res) => {
    db.Crypto.findAll({}).then(dbCrypto => {
      res.json(dbCrypto);
    });
  });

  // Create a new crypto
  app.post('/api/crypto', (req, res) => {
    db.Crypto.create(req.body).then(dbCrypto => {
      res.json(dbCrypto);
    });
  });

  // Delete an crypto by id
  app.delete('/api/crypto/:id', (req, res) => {
    db.Crypto.destroy({
      where: {
        id: req.params.id,
      },
    }).then(dbCrypto => {
      res.json(dbCrypto);
    });
  });

  // Update an crypto by id
  app.put('/api/crypto/:id', (req, res) => {
    db.Crypto.update(
      {
        name: req.body.coin_name,
        symbol: req.body.coin_symbol,
        date: req.body.purch_date,
        price: req.body.purch_price,
        qty: req.body.purch_quantity,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(dbCrypto => {
      res.json(dbCrypto);
    });
  });

  // Get all realEstate
  app.get('/api/realestate', (req, res) => {
    db.RealEstate.findAll({}).then(dbRealEstate => {
      res.json(dbRealEstate);
    });
  });

  // Create a new realEstate
  app.post('/api/realestate', (req, res) => {
    db.RealEstate.create(req.body).then(dbRealEstate => {
      res.json(dbRealEstate);
    });
  });

  // Delete an realEstate by id
  app.delete('/api/realestate/:id', (req, res) => {
    db.RealEstate.destroy({
      where: {
        id: req.params.id,
      },
    }).then(dbRealEstate => {
      res.json(dbRealEstate);
    });
  });

  // Update an realEstate by id
  app.put('/api/realestate/:id', (req, res) => {
    db.RealEstate.update(
      {
        address: req.body.prop_address,
        price: req.body.purch_price,
        date: req.body.purch_date,
        rented: req.body.rented,
        month_rev: req.body.month_rev,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(dbRealEstate => {
      res.json(dbRealEstate);
    });
  });

  // Get all stocks
  app.get('/api/stocks', (req, res) => {
    db.Stocks.findAll({}).then(dbStocks => {
      res.json(dbStocks);
    });
  });

  // Create a new stocks
  app.post('/api/stocks', (req, res) => {
    db.Stocks.create(req.body).then(dbStocks => {
      res.json(dbStocks);
    });
  });

  // Delete an stocks by id
  app.delete('/api/stocks/:id', (req, res) => {
    db.Stocks.destroy({
      where: {
        id: req.params.id,
      },
    }).then(dbStocks => {
      res.json(dbStocks);
    });
  });

  // Update an stocks by id
  app.put('/api/stocks/:id', (req, res) => {
    db.Stocks.update(
      {
        name: req.body.coin_name,
        symbol: req.body.coin_symbol,
        date: req.body.purch_date,
        price: req.body.purch_price,
        qty: req.body.purch_quantity,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(dbStocks => {
      res.json(dbStocks);
    });
  });
};
