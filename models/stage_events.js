'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stages_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stages_events.init({
    stage_event_id:{ type: DataTypes.INTEGER,
      primaryKey: true,
    autoIncrement: true},

    stage_id: { type:DataTypes.INTEGER,
      allowNull: false},

    event_id: { type:DataTypes.INTEGER,
      allowNull: false }
},
{
    sequelize,
    modelName: 'Stages_events',
    tableName: 'stages_events',
  timestamps: false
  });
  return Stages_events;
};