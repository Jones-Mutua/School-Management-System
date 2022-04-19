const Sequelize = require('sequelize');
const sequelize = require ('../config/db.config');

const StudentAttendance= sequelize.define("Student_Attendance",{
    Student_Attendance_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Student:{
        type:Sequelize.INTEGER,
        allowNull:false,
        
    },
    School_Date:{
        type:Sequelize.DATE,
        allowNull:false,
        
    },
    Student_Arrival:{
        type:Sequelize.TIME,
        allowNull:false,
        
    },
    Student_Depature:{
        type:Sequelize.TIME,
        allowNull:false,
        
    },

    

    
});

module.exports =StudentAttendance;
        
    