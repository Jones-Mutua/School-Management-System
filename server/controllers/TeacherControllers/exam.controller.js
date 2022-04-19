const Questions = require("../../models/TeacherModels/examModel");

module.exports = {
 async createExam (req,res){
    try {  
        let examInfo = {
                    Exam_Paper: req.body.examName,
                    Exam_Paper_Name:req.body.paperName,
                    Exam_Question: req.body.question,
       
        };

        console.log(examInfo)
        const exams = await Questions.create(examInfo);
        res.status(200).send(exams);
        // console.log(exams);
    } catch (error) {
        console.log("this is the error", error);
    }
 },
 
//  Getting all Qusetions

    async getExamAll (req,res){
        try {
            let exams = await Questions.findAll({})
            res.status(200).json(exams)
// console.log(exams);
        }catch(err){
            res.status(500).json("Something went wrong");

            // console.log('this is the error',err);

        }
    },
    // get questions by id
    async getEaxamById  (req,res) {
try {
    let id = req.params.Exam_Question_Id
    let exams = await Questions.findOne({ where: {Exam_Question_Id :id }})
    res.status(200).send('Question  succefully by id ')

} catch (error) {
    console.log(error);
}
    },
 
    // Updating questions
    async updateExam (req,res){
        try{
            let id = req.params.Exam_Question_Id
            let exams = await Questions.update(req.body,{where:{Exam_Question_Id :id }})
            res.status(200).send('Question updated succefully')

        } catch (err){
            console.log(err)
        }
    },

    // delete question by id
    async deleteQuestion (req,res){
        try{
            const id = req.params.Exam_Question_Id
            await Questions.destroy({where:{Exam_Question_Id:id}})
            res.status(200).send("Question is deleted")

        }catch (err){
            res.status(500).send("Something went wrong while deleting question",err)

            // console.log("deleteTeacher",err)
        }
    }
}