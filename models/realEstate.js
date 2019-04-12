module.exports = (sequelize, DataTypes) => {
  const RealEstate = sequelize.define('RealEstate', {
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
    prop_address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prop_address2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prop_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prop_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prop_zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prop_price: {
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
  return RealEstate;
};
