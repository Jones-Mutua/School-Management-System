const Sequelize = require('sequelize');
const sequelize = require ('../config/db.config');

const Teachers = sequelize.define("Teachers",{
    Teacher_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
       
    },
    Teacher_Login_Id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        
    },
    Staff_Id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        
    },
    Teacher_First_Name:{
        type:Sequelize.STRING,
        allowNull:false

    },
    Teacher_Last_Name:{
        type:Sequelize.STRING,
        allowNull:false

    },
    Date_of_Birth:{
        type:Sequelize.DATE,
      
    },
    
    Teacher_Gender:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Teacher_Class:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports =Teachers;
        
    