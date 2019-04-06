module.exports = function(sequelize, DataTypes) {
    const RealEstate = sequelize.define('RealEstate', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      prop_address: {
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
      rented: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      month_rev: {
          type: DataTypes.INTEGER,
          allowNull: false,
      }
    });
    return RealEstate;
  };