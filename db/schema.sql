DROP DATABASE IF EXISTS bullean_db;
CREATE DATABASE bullean_db;
USE bullean_db;

CREATE TABLE crypto
(
    id INT NOT NULL AUTO_INCREMENT,
    coin_name VARCHAR(50) NOT NULL,
    coin_symbol VARCHAR(10) NOT NULL,
    purch_date DATE NOT NULL,
    purch_price INT NOT NULL,
    purch_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE stocks
(
    id INT NOT NULL AUTO_INCREMENT,
    stock_name VARCHAR(50) NOT NULL,
    stock_symbol VARCHAR(10) NOT NULL,
    purch_date DATE NOT NULL,
    purch_price INT NOT NULL,
    purch_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE real_estate
(
    id INT NOT NULL AUTO_INCREMENT,
    prop_address VARCHAR(50) NOT NULL,
    purch_price INT NOT NULL,
    purch_date DATE NOT NULL,
    rented BOOLEAN NOT NULL DEFAULT false,
    month_rev INT NOT NULL,
    PRIMARY KEY (id)
);

