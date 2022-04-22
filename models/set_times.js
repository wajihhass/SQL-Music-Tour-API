'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Set_times extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set_times.init({
    set_time_id: { 
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    event_id: {
       type: DataTypes.INTEGER,
       foreignKey:true,
       references: { table:'events',
        field:'event_id'},
       allowNull: false
  },

    stage_id: { 
      type: DataTypes.INTEGER,
      foreignKey:true,
      allowNull: false
  } 
},{
    sequelize,
    modelName: 'Set_time',
    tableName: 'set_times'
  });

  return Set_times;
};

