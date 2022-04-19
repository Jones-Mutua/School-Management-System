const express = require('express');

const router = express.Router();

//controllers

const {
    createTeacher,
    getAllTeacher,
    getOneTeacher,
    updateTeacher,
    deleteTeacher,
    teacherCount

}= require ('../controllers/teacher')

//endpoints
router.post("/create-teacher", createTeacher);
router.get ("/view-teacher", getAllTeacher);
router.get('/:id', getOneTeacher);
router.put ('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

router.post("/teacher-count",  teacherCount);

module.exports =router;