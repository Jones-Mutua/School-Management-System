const express = require('express');
const { markAttendance } = require('../controllers/students/attendance');
const { viewResults } = require('../controllers/students/results');

const router = express.Router();
const db = require("../config/students/database")
const Attendance = require("../models/students/Attendance")
const Result = require("../models/students/Result")

//controllers
const {
    createStudent,
    viewAllStudent,
    getOneStudent,
    updateStudent,
    deleteStudent,
    studentCount
}= require('../controllers/students')

router.post("/create-student", createStudent);
router.get ("/view-student", viewAllStudent);
router.get('/student/:id', getOneStudent);
router.put ('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);


router.post("/student-count",  studentCount);

router.post ("/attendance", markAttendance);
router.get ("/results/:unit_id", viewResults);





module.exports =router;