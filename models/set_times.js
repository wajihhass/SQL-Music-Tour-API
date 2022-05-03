'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    
      // define association here
      static associate({ Band, Event, Stage }) {
        // band
        SetTime.belongsTo(Band, {
          foreignKey: "band_id",
          as: "band"
        })
  
        // event
        SetTime.belongsTo(Event, {
          foreignKey: "event_id",
          as: "event"
        })
  
        // stage 
        SetTime.belongsTo(Stage, {
          foreignKey: "stage_id",
          as: "stage"
        })
      }
    };
  SetTime.init({
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
    modelName: 'SetTime',
    tableName: 'set_times'
  });

  return SetTime;
};

