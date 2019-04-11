const db = require('../models');

module.exports = app => {
  // CREATE a new stock
  app.post('/api/stocks', (req, res) => {
    db.Stocks.create(req.body).then(dbStocks => {
      res.json(dbStocks);
    });
  });

  // READ all stocks
  app.get('/api/stocks', (req, res) => {
    db.Stocks.findAll({}).then(dbStocks => {
      res.json(dbStocks);
    });
  });

  // UPDATE a stock by id
  app.put('/api/stocks/:id', (req, res) => {
    db.Stocks.update(
      // Fix below code
      {
        date: req.body.transaction_date,
        name: req.body.coin_name,
        symbol: req.body.coin_symbol,
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

  // DELETE a stock by id
  app.delete('/api/stocks/:id', (req, res) => {
    db.Stocks.destroy({
      where: {
        id: req.params.id,
      },
    }).then(dbStocks => {
      res.json(dbStocks);
    });
  });
};
