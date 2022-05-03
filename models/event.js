'use strict'
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
        
      // define association here
      static associate({ Stage, StageEvent, MeetGreet, SetTime }) {
        // stages
        Event.belongsTo(Stage, {
          foreignKey: "stage_id",
          as: "stages",
         // through: StageEvent
        })
        
        // meet and greets 
        Event.hasMany(MeetGreet, {
          foreignKey: "event_id",
          as: "meetGreets"
        })
  
        // set times 
        Event.hasMany(SetTime, {
          foreignKey: "event_id",
          as: "set_times"
        })
      }
    }
   Event.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    stage_id:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  });
  return Event;
};