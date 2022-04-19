const Sequelize = require('sequelize');
const sequelize = require ('../../config/db.config');



    const Question = sequelize.define("Assessments_Questions", {
        Assessment_Question_Id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            allowNull:true,
            primaryKey:true
        },
        Assessment_Paper: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Assessment_Question: {
            type: Sequelize.STRING,
            allowNull: false
        },

       
        }
       ,{
        timestamps: false,
        freezeTableName: true,
       

    })
    module.exports =Question;
