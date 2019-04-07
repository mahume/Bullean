module.exports = function(sequelize, DataTypes) {
  const Stocks = sequelize.define('Stocks', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    stock_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock_symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purch_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    purch_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purch_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
  });
  return Stocks;
};
