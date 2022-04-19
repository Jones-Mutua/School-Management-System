const Sequelize = require('sequelize');
const sequelize = require ('../config/db.config');

const Exams = sequelize.define("exam",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Exam_Date:{
        type:Sequelize.DATE,
       allowNull:false

    },
    Exam_Start:{
        type:Sequelize.TIME,
        allowNull:false

    },
    Exam_End:{
        type:Sequelize.TIME,
        allowNull:false
    }, 
    Exam_Marks:{
        type:Sequelize.INTEGER,
        allowNull:false
      
    }
    
});

module.exports =Exams;
        
    