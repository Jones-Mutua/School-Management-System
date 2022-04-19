const Sequelize = require('sequelize');
const sequelize = require ('../../config/db.config');



    const Results = sequelize.define("Results", {
        Results_Id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            allowNull:true,
            primaryKey:true
        },
        Results_Unit_Name: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Assessment_Results_Marks: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Exam_Results_Marks: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Total_Marks: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Grade: {
            type: Sequelize.STRING,
            allowNull: false
        },


    })
    module.exports =Results;
