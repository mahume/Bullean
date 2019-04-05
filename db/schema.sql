DROP DATABASE IF EXISTS project_db;
CREATE DATABASE project_db;
USE project_db;

CREATE TABLE crypto
(
    id INT NOT NULL AUTO_INCREMENT,
    coinName VARCHAR(50) NOT NULL,
    coinSymbol VARCHAR(10) NOT NULL,
    purchDate DATE NOT NULL,
    purchPrice INT NOT NULL,
    purchQuantity INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE stocks
(
    id INT NOT NULL AUTO_INCREMENT,
    stockName VARCHAR(50) NOT NULL,
    stockSymbol VARCHAR(10) NOT NULL,
    purchDate DATE NOT NULL,
    purchPrice INT NOT NULL,
    purchQuantity INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE real_estate
(
    id INT NOT NULL AUTO_INCREMENT,
    propAddress VARCHAR(50) NOT NULL,
    purchPrice INT NOT NULL,
    purchDate DATE NOT NULL,
    rented BOOLEAN NOT NULL DEFAULT false,,
    monthRev INT NOT NULL,
    PRIMARY KEY (id)
);

