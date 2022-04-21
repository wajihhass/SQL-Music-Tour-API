'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_greets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meet_greets.init({
    meet_greet_id: { type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true},

    event_id: {type:DataTypes.INTEGER,
      allowNull:true
    },

    band_id:{type: DataTypes.INTEGER,
      allowNull:true
  }
},
   {
    sequelize,
    modelName: 'Meet_greets',
    tableName: 'meet_greets',
    timestamps: false
  });
  return Meet_greets;
};