const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require ('../config/db.config');

const Students = sequelize.define("Students",{
    Student_Id:{
        type:Sequelize.INTEGER,
        auto_increment:true,
        allowNull:false,
        primaryKey:true
    },
    Reg_Id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        
    },
    Reg_Number:{
        type:Sequelize.INTEGER,
        allowNull:false,
        
    },
    Student_Email:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    Student_UserId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        
    },
    Student_First_Name:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    Student_Last_Name:{
        type:Sequelize.STRING,
        allowNull:false

    }, 
    Date_of_Birth:{
        type:Sequelize.DATE,
      
    },
    Student_Gender:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Student_Class:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Student_Class: {
        type: Sequelize.INTEGER,
        allowNull: false

    },
    
});

module.exports =Students;
        
    