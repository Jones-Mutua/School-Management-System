const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const {readdirSync} = require('fs');

const Exams = require('../server/models/TeacherModels/examModel')

const app = express();
app.use(cookieParser());

dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.json({extended : false}))
app.use(express.urlencoded({ extended: true }));

// models
const student = require('../server/models/students')
const teacher = require ('./models/teacher')
const exam = require('./models/exam')
const user = require('../server/models/users')
const roles = require ('./models/roles')
const attendance = require ('./models/studentAttendance')
const unit= require('./models/units')
const registration = require('./models/studentReg')

exam.sync();
student.sync();
user.sync();
roles.sync();
attendance.sync();
unit.sync();
registration.sync()
teacher.sync();
// await sequelize.sync({ force: true });

console.log("All models were synchronized successfully.");

app.listen(port, () => console.log(`Server is running on port ${port}`)); 
