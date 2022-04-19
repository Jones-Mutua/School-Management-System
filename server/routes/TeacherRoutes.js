
const express = require('express');
const { getExamAll, deleteQuestion ,createExam,updateExam, getEaxamById} = require('../controllers/TeacherControllers/exam.controller');
const { AddUnit, getAllUnit } = require('../controllers/TeacherControllers/Units');
const {AttendMark,getAttend,AttendCount} = require('../controllers/TeacherControllers/Attendance')
const {getAssessment,createAssessments} = require('../controllers/TeacherControllers/Assessment')
const {createResults,getAllResults} = require('../controllers/TeacherControllers/Results')
const router = express.Router();


//  routes for exam
router.get('/exams', getExamAll);
router.delete("/examDel/:Exam_Question_Id", deleteQuestion);
router.get("/exam/:Exam_Question_Id", getEaxamById)
router.post("/create", createExam);
router.put('/exams/:Exam_Question_Id', updateExam)


// rootes for assesments
router.get('/assess', getAssessment);
router.post('/', createAssessments);

// routes for units
router.get('/units', getAllUnit);
router.post('/addunit',  AddUnit);

// routes for attendace
router.post('/mark', AttendMark);
router.get('/attend',getAttend);
router.get('/count', AttendCount)

// results routes
router.post('/addresults',createResults);
router.get('/results',getAllResults);


module.exports = router;