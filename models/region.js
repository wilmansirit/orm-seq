'use strict';
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    region: DataTypes.STRING
  }, {});
  Region.associate = function(models) {
    // associations can be defined here
    Region.belongsTo(models.GranRegion)
  };
  return Region;
};