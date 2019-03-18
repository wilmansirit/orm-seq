'use strict';
module.exports = (sequelize, DataTypes) => {
  const GranRegion = sequelize.define('GranRegion', {
    granRegion: DataTypes.STRING
  }, {});
  GranRegion.associate = function(models) {
    // GranRegion hasMany Region
    GranRegion.hasMany(models.Region)
  };
  return GranRegion;
};