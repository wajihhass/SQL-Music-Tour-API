'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    
      // define association here
      static associate({ Event, StageEvent, SetTime }) {
        // events 
        Stage.hasMany(Event, {
          foreignKey: "stage_id",
          as: "events"
          //through: StageEvent
        })
  
        // set times 
        Stage.hasMany(SetTime, {
          foreignKey: "stage_id",
          as: "set_times"
        })
      }
    }
  
  Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
}
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
  });
  return Stage;
};