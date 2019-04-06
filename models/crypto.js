module.exports = function(sequelize, DataTypes) {
  const Crypto = sequelize.define(
    'Crypto',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      coin_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coin_symbol: {
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
    },
    {
      underscored: true,
    }
  );
  return Crypto;
};
