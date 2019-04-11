const dbStocks = require('../models');

module.exports = app => {
  // CREATE a new stocks
  app.post('/api/stocks', (req, res) => {
    dbStocks.Stocks.create(req.body).then(dbStocks => {
      res.json(dbStocks);
    });
  });

  // READ all stocks
  app.get('/api/stocks', (req, res) => {
    dbStocks.Stocks.findAll({}).then(dbStocks => {
      res.json(dbStocks);
    });
  });

  // UPDATE a stocks by id
  app.put('/api/stocks/:id', (req, res) => {
    dbStocks.Stocks.update(
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

  // DELETE a stocks by id
  app.delete('/api/stocks/:id', (req, res) => {
    dbStocks.Stocks.destroy({
      where: {
        id: req.params.id,
      },
    }).then(dbStocks => {
      res.json(dbStocks);
    });
  });
};
