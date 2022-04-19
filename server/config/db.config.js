

const {Sequelize} = require('sequelize');



const config = new Sequelize('istl_school_db','jones','5397', {
    host: "localhost",
        "define": {
      timestamps: false
    },
    dialect: 'mysql'
})
try {
    config.authenticate();
    console.log("Successfully Connected to the Database...");
} catch (error) {
    console.error('unable to connect to the database')
}
module.exports = config;