'use strict'
const {
  Model
} = require('sequelize');
//const bands = require('../controllers/bands_controller');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    
    // define association here
    static associate({ MeetGreet, SetTime }) {
      // meet and greets
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "MeetGreets"
      })
     
      Band.hasMany(SetTime, {
        foreignKey: "band_id",
        as: "SetTimes"
      })
    }
  }
    
  Band.init({
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
  });
  return Band;
};