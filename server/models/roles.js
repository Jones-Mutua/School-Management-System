const Sequelize = require('sequelize');
const sequelize = require ('../config/db.config');

const Roles = sequelize.define("Roles",{
    Role_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Role_Name:{
        type:Sequelize.STRING,
       allowNull:false

    }  
    
    
});

module.exports =Roles;
        
    