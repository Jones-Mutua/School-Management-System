const Sequelize = require('sequelize');
const sequelize = require ('../config/db.config');

const Units = sequelize.define("Units",{
    Unit_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Unit_Name:{
        type:Sequelize.STRING,
        allowNull:false

    },
    Day_Taught:{
        type:Sequelize.STRING,
        allowNull:false

    },
    Start_Time:{
        type:Sequelize.TIME,
        allowNull:false
    }, 
    End_Time:{
        type:Sequelize.TIME,
        allowNull:false
      
    },
    
    Final_Results:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports =Units;
        
    

