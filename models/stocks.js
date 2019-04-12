module.exports = (sequelize, DataTypes) => {
  const Stocks = sequelize.define('Stocks', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    transaction_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock_symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock_price: {
      type: DataTypes.FLOAT(6, 2),
      allowNull: false,
    },
    stock_quantity: {
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
