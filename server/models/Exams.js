const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/students/database")


const Exams = db.define("Exams", {
// Model attributes are defined here
Exam_Id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  allowNull:false,
  primaryKey: true
},
Exam_Date:{
  type: DataTypes.DATE,
  allowNull:false,
  },
Exam_Start: {
  type: DataTypes.TIME,
  allowNull: false,
  },
Exam_End: {
  type: DataTypes.TIME,
  allowNull:false
  },
Exam_Marks: {
  type: DataTypes.INTEGER,
  allowNull:true,
  },
      
})

module.exports = Exams;
