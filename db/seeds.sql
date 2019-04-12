INSERT INTO Cryptos (date, transaction, category, name, symbol, price, quantity)
VALUES  ('2015-01-20', 'purchase', 'Crypto', 'Litecoin', 'LTC', 88.20, 100),
        ('2016-04-10', 'sale', 'Crypto', 'Ethereum', 'ETH', 180.29, 4),
        ('2017-01-13', 'purchase', 'Crypto', 'Bitcoin', 'BTC', 767.15, 10),
        ('2018-07-27', 'sale', 'Crypto', 'Dogecoin', 'DOGE', 90.01, 400),
        ('2019-01-02', 'purchase', 'Crypto', 'Monero', 'XMR', 69.61, 10);

INSERT INTO RealEstates (date, transaction, category, address1, address2, city, state, zip, price)
VALUES  ('2015-06-01', 'purchase', 'Real Estate', '123 Main St', 'Apt 100', 'Miami', 'Florida', 33109, 1525000),
        ('2017-12-21', 'sale', 'Real Estate', '800 Broad St', 'Apt 670', 'Denver', 'Colorado', 80206, 525000),
        ('2019-02-21', 'purchase', 'Real Estate', '1500 5th Ave', '', 'New York', 'New York', 10001, 5250000);

INSERT INTO Stocks (date, transaction, category, name, symbol, price, quantity)
VALUES ('2012-01-01', 'purchase', 'Stock', 'Google', 'GOOGL', 991.25, 24),
       ('2014-04-20', 'sale', 'Stock', 'Amazon', 'AMZN', 100.25, 27),
       ('2016-02-11', 'purchase', 'Stock', 'Facebook', 'FB', 200.95, 300),
       ('2018-09-30', 'sale', 'Stock', 'Netflix', 'NFLX', 61.61, 44),
       ('2019-12-07', 'purchase', 'Stock', 'General Motors', 'GM', 72.00, 26);