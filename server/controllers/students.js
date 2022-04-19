const Students = require("../models/students");
const Users = require("../models/users");
const Roles = require("../models/roles");
const StudentRegistration = require('../models/studentRegistration')
module.exports = {
 async createStudent (req,res){
    try {
       
        const {    
           Registration_Number,         
           Registration_Date,
          Student_Login_Id,
            FirstName,
            Last_Name,
            Date_of_Birth,
            Student_Gender,
            Student_Class,
            User_Email,
            User_Password,
            User_Role
         } = req.body;
         //console.log(Registration_Number)
         //validation 
       if (!Registration_Number) return res.status(400).send("Student registration is required");
       if (!Registration_Date) return res.status(400).send("Registration date is required");
         if (!Student_Login_Id) return res.status(400).send("Student login ID is required");
         if (!FirstName) return res.status(400).send("Student first name is required");
         if (!Last_Name) return res.status(400).send("Student last name is required");
         if (!Student_Class) return res.status(400).send("Student class is required");
         if (!User_Email) return res.status(400).send("email is required");
         if (!User_Password) return res.status(400).send("password is required");
         if (!User_Role || User_Role.length>3){
            return res.status(400).send("role is required and should not exceed 3");
         }

         if (!User_Password || User_Password.length < 6) {
           return res
             .status(400)
             .send("password is required and should be min 6 characters long");
         }
         
        
       const studentReg = await StudentRegistration.create({Registration_Number,Registration_Date});
        
        const studentUser = await Users.create({
            User_Email,
            User_Password,
            User_Role});

        const id = await Users.findOne({where: {User_Email: User_Email}})
         
        const student = await Students.create({
            Reg_Number:Registration_Number,
            Student_UserId: id.Users_Id,
            Student_Email: User_Email,
            Student_First_Name:FirstName,
            Student_Last_Name:Last_Name,
            Date_of_Birth,
            Student_Gender,
            Student_Class,
        });
        
        
       
        res.status(200).send({studentUser,studentReg});
       // res.status(200).send(studentUser);
        console.log(student);
   
    } catch (error) {
        console.log("this is the  student create error=>", error);
        return res.status(400).send("Error. Try again.");
    }
 },
 // Getting all students
    async viewAllStudent (req,res){
        try {
            // let userEmail = await Users.findAll({})
            let students = await Students.findAll({})
            res.status(200).send(students)

        }catch(err){
            console.log('this is the error=>',err);
        }
    },
    //Getting single student
    async getOneStudent (req,res){
        try{
            let id = req.params.id
            let student = await Students.findOne({ where: { Student_Id: id }})
            res.status(200).send(student)

        }catch (err){
            console.log("here is the error=>",err)
        }        
    },  
    //Update Student
    async updateStudent (req,res){
        try{
            let id = req.params.id
            let student = await Students.update(req.body,{where : {id: id}})
            res.status(200).send(student)

        }catch (err){
            console.log("update student err=>",err)
        }
    },
  //Delete student by id
   async deleteStudent (req,res){
       try{
           let id = req.params.id
           await Students.destroy(req.body,{where : {id:id}})
           res.status(200).send("student is deleted!")

       }catch (err){
           console.log("delete student err=>",err)
       }
   },
   async  studentCount (req, res) {
    try {
      const studentCount = await Students.findAll({})
      
      res.json(studentCount);
   
    } catch (err) {
      console.log(err);
    }
  },
  



}




    

