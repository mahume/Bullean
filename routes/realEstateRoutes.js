const dbRealEstate = require('../models');

module.exports = app => {
  // CREATE a new realEstate
  app.post('/api/realestate', (req, res) => {
    dbRealEstate.RealEstate.create(req.body).then(dbRealEstate => {
      res.json(dbRealEstate);
    });
  });

  // READ all realEstate
  app.get('/api/realestate', (req, res) => {
    dbRealEstate.RealEstate.findAll({}).then(dbRealEstate => {
      res.json(dbRealEstate);
    });
  });

  // UPDATE a realEstate by id
  app.put('/api/realestate/:id', (req, res) => {
    dbRealEstate.RealEstate.update(
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

  // DELETE a realEstate by id
  app.delete('/api/realestate/:id', (req, res) => {
    dbRealEstate.RealEstate.destroy({
      where: {
        id: req.params.id,
      },
    }).then(dbRealEstate => {
      res.json(dbRealEstate);
    });
  });
};
