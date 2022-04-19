const Sequelize = require('sequelize');
const sequelize = require ('../../config/db.config');



    const Question = sequelize.define("Exam_Questions", {
        Exam_Question_Id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            allowNull:true,
            primaryKey:true
        },
        Exam_Paper: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        Exam_Paper_Name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        Exam_Question: {
            type: Sequelize.STRING,
            allowNull: false
        },
      
       
        }
       ,{
        timestamps: false,
        freezeTableName: true,
       

    })
    module.exports =Question;
