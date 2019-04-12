module.exports = (sequelize, DataTypes) => {
  const Crypto = sequelize.define('Crypto', {
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
    coin_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coin_symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coin_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    coin_quantity: {
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
  return Crypto;
};
