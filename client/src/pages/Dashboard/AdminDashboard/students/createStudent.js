import React, { useState } from "react";
import "./createStudent.style";
import { NewStudent } from "./createStudent.style";
import axios from "axios";
import { Navigate } from "react-router-dom";

import {toast} from "react-toastify";


  //state
const CreateStudent =() =>{

 const [Registration_Number ,setRegistration_Number]= useState("");
const [Registration_Date ,setRegistration_Date]= useState("");
  const [Student_Login_Id ,setStudent_Login_Id]= useState("");
 const [FirstName ,setFirstName]= useState("");
  const [Last_Name ,setLast_Name]= useState("");
  const [Date_of_Birth ,setDate_of_Birth]= useState("");
  const [Student_Gender, setStudent_Gender]= useState("");
  const [Student_Class, setStudent_Student_Class]= useState("");
  const [User_Email, setUser_Email]= useState("");
  const [User_Password, setUser_Password]= useState("");
  const [User_Role, setUser_Role]= useState("");
  

  const [redirect, setRedirect] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      
      //  const { data } = await axios.post("/api/course", {
      //   ...values,
      // toast("Great! Now you can start adding lessons");
      
       const{ data} =await axios.post('http://localhost:8000/api/create-student', {
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

          //regDate
          
        });
        if (data ==data) {
          setRedirect('/admin-dashboard')

      }
       
        toast.success("Student registration successfully")
     //   router.push("/admin-dashboard");
        console.log(" REGISTER RESPONSE", data);
        
    //  toast("Great! Student registered ");
      setRegistration_Number("");
     setRegistration_Date("");
     setStudent_Login_Id("");
      setFirstName();      
      setLast_Name("");
      setDate_of_Birth("");
      setStudent_Gender("");
      setStudent_Student_Class("");
      setUser_Email("");
      setUser_Password("");
      setUser_Role("");

    }catch(err){
      console.log("this is the handleSubmit error", err.data)
      // toast(err.response.data)
    }

  };
  
  if (redirect) {
    return <Navigate to={redirect} />;
} else
  return (
    
    <NewStudent>
      
        <div className="newUser">
          <h1 className="newUserTitle">New Student</h1>
          <form className="newUserForm" onSubmit={handleSubmit}>
            <div className="newUserItem">
            <label>Student Registration Number</label>
              <input type="number"
              value={Registration_Number}
             placeholder="enter Registration Number"
             onChange={(e) => setRegistration_Number(e.target.value)}
             />     
            </div>
            <div className="newUserItem">
            <label>Student Registration Date</label>
              <input type="date"
              value={Registration_Date}
             placeholder="enter Student Registration Date"
             onChange={(e) => setRegistration_Date(e.target.value)}
             />     
            </div>
            <div className="newUserItem">
            <label> Student Login Id</label>
              <input type="text"
              value={Student_Login_Id}
             placeholder="enter student login id"
             onChange={(e) => setStudent_Login_Id(e.target.value)}
             />     
            </div>
            <div className="newUserItem">
            <label>firstname </label>
              <input type="text" 
             placeholder="enter firstname"
             value={FirstName}
             onChange={(e) => setFirstName(e.target.value)}
            />
            </div>
            <div className="newUserItem">
            <label>lastname </label>
               <input type="text" 
               value={Last_Name}
              placeholder="enter lastname"
              onChange={(e) => setLast_Name(e.target.value)}
             />
            </div>
            <div className="newUserItem">
            <label>Email </label>
               <input type="email" 
               value={User_Email}
              placeholder="enter student email"
              onChange={(e) => setUser_Email(e.target.value)}
             />
            </div>
            <div className="newUserItem">
            <label>Password </label>
               <input type="password" 
               value={User_Password}
              placeholder="enter student password"
              onChange={(e) => setUser_Password(e.target.value)}
             />
            </div>
            <div className="newUserItem">
            <label>Role</label>
               <input type="number" 
               value={User_Role}
              placeholder="enter role"
              onChange={(e) => setUser_Role(e.target.value)}
             />
            </div>
            
            
            <div className="newUserItem">
            <label>Date of Birth </label>
              <input type="date" 
              placeholder="enter regDate"
              value={Date_of_Birth}
              onChange={(e) => setDate_of_Birth(e.target.value)}
            />
            
            </div>         
            
            <div className="newUserItem">
              <label>Gender</label>
              <select className="newUserSelect" 
              name="active" 
              id="active"
              value={Student_Gender}
              onChange={(e) => setStudent_Gender(e.target.value)}
              
              >
                <option >Female</option>
                <option >Male</option>
                
              </select>
            </div>
            <div className="newUserItem">
            <label>class</label>
               <input type="number" 
               value={Student_Class}
              placeholder="enter class"
              onChange={(e) => setStudent_Student_Class(e.target.value)}
             />
            </div>
           
            
        
            <button className="newUserButton" type='submit'>Create</button>
          </form>
          
        </div>
      
     

    </NewStudent>
  );
}
export default CreateStudent;
