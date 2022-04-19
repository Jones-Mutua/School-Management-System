const Units = require("../../models/TeacherModels/addUnit");

module.exports = {
 async AddUnit (req,res){
    try {
        
        let unitInfo = {
            // id: req.body.id,
            Unit_Name:req.body.Unit_Name,
            Day_Taught: req.body.Day_Taught,
            Start_Time:req.body.Start_Time,
            End_Time: req.body.End_Time,
            // Unit_Teacher: req.body.Unit_Teacher,
       
       
        };
        
        // let examExist = await Exams.findOne(req.params.id)
        // if (examExist) return res.status(400).send("exam already exist");
        
        console.log(unitInfo)
        const units = await Units.create(unitInfo);
        res.status(200).send("Unit  was Succesfully created");
        // console.log(exams);
    } catch (error) {
        // console.log("this is the error", error);
        res.status(404).send("Something went wrong");
    }
 },
 
//  Getting all exam

    async getAllUnit (req,res){
        try {
            let units = await Units.findAll({})
            res.status(200).send("All units have been succesfully set")

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


