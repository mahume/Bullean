DROP DATABASE IF EXISTS project_db;
CREATE DATABASE project_db;
USE project_db;

CREATE TABLE crypto
(
    id INT NOT NULL AUTO_INCREMENT,
    crypto_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE real_estate
(
    id INT NOT NULL AUTO_INCREMENT,
    property_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE stocks
(
    id INT NOT NULL AUTO_INCREMENT,
    stock_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

