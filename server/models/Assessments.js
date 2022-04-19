const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/students/database")


const Assessments = db.define("Assessments", {
// Model attributes are defined here
Assessment_Id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  allowNull:false,
  primaryKey: true
},
Assessment_Date:{
  type: DataTypes.DATE,
  allowNull:false,
  },
Assessment_Start: {
  type: DataTypes.TIME,
  allowNull: false,
  },
Assessment_End: {
  type: DataTypes.TIME,
  allowNull:false
  },
Assessment_Marks: {
  type: DataTypes.INTEGER,
  allowNull:true,
  },
      
})

module.exports = Assessments;
