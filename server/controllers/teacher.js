
const Teachers = require("../models/teacher");
const Users = require("../models/users");
module.exports = {
 async createTeacher(req,res){
    try {
       
        const {    
            Teacher_Login_Id,         
            Staff_Id,
            First_Name,
            Last_Name,
            Date_of_Birth,
            Teacher_Gender,
            Teacher_Class,
            User_Email,
            User_Password,
            User_Role
         } = req.body;
      
         //validation 
         if (!Teacher_Login_Id) return res.status(400).send("Student registration is required");
         if (!Staff_Id) return res.status(400).send("Registration date is required");
         if (!First_Name) return res.status(400).send("Student login ID is required");
         
         if (!Last_Name) return res.status(400).send("Student last name is required");
         if (!Teacher_Class) return res.status(400).send("Student class is required");
         if (!User_Email) return res.status(400).send("email is required");
         if (!User_Password) return res.status(400).send("password is required");
         if (!User_Role) return res.status(400).send("role is required");


         if (!User_Password || User_Password.length < 6) {
           return res
             .status(400)
             .send("password is required and should be min 6 characters long");
         }
         
         const teacherUser = await Users.create({
            User_Email,
            User_Password,
            User_Role});
        const teacher= await Teachers.create({
            Teacher_Login_Id,
            Staff_Id,            
            Teacher_First_Name:First_Name,
            Teacher_Last_Name:Last_Name,
            Date_of_Birth,
            Teacher_Gender,
            Teacher_Class,
        });
        
        
       
        //res.status(200).send({teacherUser,teacher});
        res.status(200).send(teacherUser);
        console.log(teacher);
   
    } catch (error) {
        console.log("this is the  teacher create error=>", error);
        return res.status(400).send("Error. Try again.");
    }
 },
    async getAllTeacher(req,res){
        try{
            const teachers = await Teachers.findAll({})
            res.status(200).send(teachers)

        }catch(err){
            console.log('this is getAllTeacher error =>',err)
        }
    },
    async getOneTeacher (req,res){
        try{
            const id = req.params.id
            const teacher = await Teachers.findOne({where :{id:id}})
            res.status(200).send(teacher)

        } catch(err){
            console.log('this is getOneTeacher error=>',err)
        }
    },
    async updateTeacher (req,res){
        try{
            const id = req.params.id
            const teacher = await Teachers.update ({where:{id :id }})
            res.status(200).send(teacher)

        } catch (err){
            console.log(err)
        }
    },
    async deleteTeacher (req,res){
        try{
            const id = req.params.id
            await Teachers.destroy({where:{id:id}})
            res.status(200).send("Teacher is deleted")

        }catch (err){
            console.log("deleteTeacher",err)
        }
    },
    async  teacherCount (req, res) {
        try {
          const teacherCount = await Teachers.findAll({})
          
          res.json(teacherCount);
       
        } catch (err) {
          console.log(err);
        }
      },
      

}