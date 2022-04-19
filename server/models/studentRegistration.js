const Sequelize = require('sequelize');
const sequelize = require ('../config/db.config');

const StudentRegistration = sequelize.define("Student_Registration",{
    Registration_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Registration_Number:{
        type:Sequelize.INTEGER,
       allowNull:false

    },
    Registration_Date:{
        type:Sequelize.DATE,
        allowNull:false

    }
    
});

module.exports =StudentRegistration;
        
    