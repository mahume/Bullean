const db = require('../models');

module.exports = app => {
  // CREATE a new crypto
  app.post('/api/crypto', (req, res) => {
    db.Crypto.create(req.body).then(dbCrypto => {
      res.json(dbCrypto);
    });
  });

  // READ all cryptos
  app.get('/api/crypto', (req, res) => {
    db.Crypto.findAll({
      transaction_date: req.body.transaction_date,
      transaction_type: req.body.transaction_type,
      coin_name: req.body.coin_name,
      coin_symbol: req.body.coin_symbol,
      coin_price: req.body.coin_price,
      coin_quantity: req.body.coin_quantity,
    }).then(dbCrypto => {
      res.json(dbCrypto);
    });
  });

  // UPDATE a crypto by id
  app.put('/api/crypto/:id', (req, res) => {
    db.Crypto.update(
      // Fix below
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

  // DELETE a crypto by id
  app.delete('/api/crypto/:id', (req, res) => {
    db.Crypto.destroy({
      where: {
        id: req.params.id,
      },
    }).then(dbCrypto => {
      res.json(dbCrypto);
    });
  });
};
