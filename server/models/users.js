const Sequelize = require('sequelize');
const sequelize = require ('../config/db.config');

const Users = sequelize.define("Users",{
    Users_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    User_Role:{
        type:Sequelize.INTEGER,
       allowNull:false

    },
    User_Email:{
        type:Sequelize.STRING,
        allowNull:false

    },
    
    User_Password:{
        type:Sequelize.STRING,
        allowNull:false
      
    }
    
});

module.exports =Users;
        
    