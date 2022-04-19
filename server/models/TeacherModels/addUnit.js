const Sequelize = require('sequelize');
const sequelize = require ('../../config/db.config');


const AddUnit = sequelize.define("Units", {
  Unit_Id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  Unit_Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Day_Taught: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Start_Time: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  End_Time: {
    type: Sequelize.TIME,
    allowNull: true,
  },
//   Unit_Teacher: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },

}
,{
    timestamps: false,
   
});

    


    module.exports =AddUnit;
