const Attendance = require("../../models/TeacherModels/Attendace");

module.exports = {
 async AttendMark (req,res){
    try {
        
        let attendInfo = {
         
            Teacher:req.body.Teacher,
            Teacher_Name:req.body.Teacher_Name,
            Work_Date: req.body.Work_Date,
            Teacher_Arrival:req.body.Teacher_Arrival,
            Teacher_Depature: req.body.Teacher_Depature,
         
       
       
        };
        
  
        console.log(attendInfo)
        const attend = await Attendance.create(attendInfo);
        res.status(200).send("Attendance Recorded");
        // console.log(exams);
    } catch (error) {
        console.log("this is the error", error);
        res.status(404).send("Something went wrong");
    }
 },
 
//  Getting all exam

    async getAttend (req,res){
        try {
            let attend = await Attendance.findAll({})
            res.status(200).json(attend)
console.log(attend);
        }catch(err){
            console.log('this is the error',err);

        }
    },

    async AttendCount (req,res){
        try {
            const count = await Attendance.findAndCountAll();
            res.status(200).json(count)
console.log(count);
        }catch(err){
            console.log('this is the error',err);

        }
    },
    // async getExamById (req,res){
    //     try {
    //        let exam = await Exams.filter(req.params.id)
    //     // if (examExist) return res.status(400).send("exam already exist");

    //     }catch(err){
    //         console.log('this is the error',err);

    //     }
    // },
}


