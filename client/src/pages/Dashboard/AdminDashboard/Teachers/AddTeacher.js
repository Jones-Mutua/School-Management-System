
import "../students/createStudent.style";
import { NewStudent } from "../students/createStudent.style";
import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {toast} from "react-toastify";


  //state
const CreateTeacher =() =>{

  const [Teacher_Login_Id ,setTeacher_Login_Id]= useState("");
  const [Staff_Id ,setStaff_Id]= useState("");
  const [First_Name ,setFirst_Name]= useState("");
 const [Last_Name ,setLast_Name]= useState("");
  const [Date_of_Birth ,setDate_of_Birth]= useState("");
  const [Teacher_Gender, setTeacher_Gender]= useState("");
  const [Teacher_Class, setTeacher_Class]= useState("");
  const [User_Email, setUser_Email]= useState("");
  const [User_Password, setUser_Password]= useState("");
  const [User_Role, setUser_Role]= useState("");

  const [redirect, setRedirect] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      
       const{ data} =await axios.post('http://localhost:8000/api/create-teacher', {
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

          //regDate
          
        });

        if (data ==data) {
          setRedirect('/admin-dashboard')

      }
        //console.log(Registration_Number);
        toast.success("Teacher registration successfull")
     //   router.push("/admin-dashboard");
        console.log(" REGISTER RESPONSE", data);
        
    //  toast("Great! Student registered ");
      // setRegistration_Number("");
      // setRegistration_Date("");
      // setStudent_Login_Id("");
      // setFirstName();      
      // setLast_Name("");
      // setDate_of_Birth("");
      // setStudent_Gender("");
      // setStudent_Student_Class("");
      // setUser_Email("");
      // setUser_Password("");
      // setUser_Role("");

    }catch(err){
      console.log("this is the handleSubmit error", err)
    //toast.error(err.response.data)
     toast.error("unable to submit")
    }

  };
  if (redirect) {
    return <Navigate to={redirect} />;
} else
 // console.log(Registration_Number);
  return (
    
    <NewStudent>
      
        <div className="newUser">
          <h1 className="newUserTitle">New Teacher</h1>
          <form className="newUserForm" onSubmit={handleSubmit}>
            <div className="newUserItem">
            <label>Teacher Login ID</label>
              <input type="number"
              value={Teacher_Login_Id}
             placeholder="enter Registration Number"
             onChange={(e) => setTeacher_Login_Id(e.target.value)}
             />     
            </div>
            <div className="newUserItem">
            <label>Staff id</label>
              <input type="number"
              value={Staff_Id}
             placeholder="enter Student Registration Date"
             onChange={(e) => setStaff_Id(e.target.value)}
             />     
            </div>
            {/* <div className="newUserItem">
            <label> Student Login Id</label>
              <input type="text"
              value={Student_Login_Id}
             placeholder="enter student login id"
             onChange={(e) => setStudent_Login_Id(e.target.value)}
             />     
            </div> */}
            <div className="newUserItem">
            <label>firstname </label>
              <input type="text" 
             placeholder="enter firstname"
             value={First_Name}
             onChange={(e) => setFirst_Name(e.target.value)}
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
            {/* <div className="newUserItem">
              <label>Role</label>
              <select className="newUserSelect" 
              name="active" 
              id="active"
              value={User_Role}
              onChange={(e) => setUser_Role(e.target.value)}
              
              >
                <option >admin</option>
                <option >teacher</option>
                <option >student</option>
                
              </select>
            </div> */}
            
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
              value={Teacher_Gender}
              onChange={(e) => setTeacher_Gender(e.target.value)}
              
              >
                <option >Gender</option>
                <option >Male</option>
                <option >Female</option>
                
              </select>
            </div>

            <div className="newUserItem">
            <label>class </label>
              <input type="number" 
              placeholder="enter regDate"
              value={Teacher_Class}
              onChange={(e) => setTeacher_Class(e.target.value)}
            />
            
            </div> 
            {/* <div className="newUserItem">
              <label>class</label>
              <select className="newUserSelect" 
              name="active" 
              id="active"
              value={Teacher_Class}
              onChange={(e) => setTeacher_Class(e.target.value)}
              
              >
                <option >Form one</option>
                <option >Form Two</option>
                <option >Form Three</option>
                <option >Form Four</option>
              </select>
            </div> */}
            
        
            <button className="newUserButton" type='submit'>Create</button>
          </form>
          
        </div>
      
     

    </NewStudent>
  );
}
export default CreateTeacher;
