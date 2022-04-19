const Sequelize = require('sequelize');
const sequelize = require ('../config/db.config');

const classes= sequelize.define("classes",{
    Class_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Class_Name:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    Units_Taught:{
        type:Sequelize.INTEGER,
        allowNull:false,
        
    }
        
});

module.exports =classes;
        
    