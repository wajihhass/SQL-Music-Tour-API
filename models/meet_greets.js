'use strict'
const {  
  Model 
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    
      // define association here
      static associate({ Band, Event }) {
        // band
        MeetGreet.belongsTo(Band, {
          foreignKey: "band_id",
          as: "band"
        })
  
        // event
        MeetGreet.belongsTo(Event, {
          foreignKey: "event_id",
          as: "events"
        })
      }
    }
  
  MeetGreet.init({
    meet_greet_id: { type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true},

    event_id: {type:DataTypes.INTEGER,
      allowNull:false
    },

    band_id:{type: DataTypes.INTEGER,
      allowNull:false
  }
},
   {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return MeetGreet;
};