const Sequelize = require('sequelize');
const sequelize = require ('../../config/db.config');


const Attendance = sequelize.define("Teacher_Attendances", {
    Teacher_Attendance_Id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  Teacher: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  Teacher_Name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Work_Date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  Teacher_Arrival: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  Teacher_Depature: {
    type: Sequelize.TIME,
    allowNull: true,
  },


}
,{
    timestamps: false,
   
});

    


    module.exports =Attendance;
