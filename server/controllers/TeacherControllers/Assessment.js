const Assessment = require("../../models/TeacherModels/Assessment");

module.exports = {
 async createAssessments (req,res){
    try {
        
        let attendInfo = {
         
            Assessment_Paper:req.body.Assessment_Paper,
            Assessment_Question: req.body.Assessment_Question,
            
         
       
       
        };
        
  
        console.log(attendInfo)
        const attend = await Assessment.create(attendInfo);
        res.status(200).send("Assessment    question Recorded");
        // console.log(exams);
    } catch (error) {
        // console.log("this is the error", error);
        res.status(404).send("Something went wrong");
    }
 },
 
//  Getting all exam

    async getAssessment (req,res){
        try {
            let attend = await Assessment.findAll({})
            res.status(200).send("All Assessment")

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


