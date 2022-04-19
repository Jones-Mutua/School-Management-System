import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { Navigate, useParams } from 'react-router'
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
   
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import {toast} from "react-toastify";
  import "./Update.style";
  import {EditStudentWrapper} from "./EditStudent.style"



  
function Update() {
  const { id } = useParams()
   // const history = useHistory()
    


    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateofBirth, setdateofBirth] = useState('')
    const [gender, setgender] = useState('')

    useEffect(() => {
        const getstudentById = async () => {
            const {data} = await axios.get(`http://localhost:8000/api/student/:id/${id}`)
            setfirstName(data.Student_First_Name)
            setlastName(data.Student_Last_Name)
            setEmail(data.Student_Email)
            setdateofBirth(data.Date_of_Birth)
            setgender(data.Student_Gender)
        }

        getstudentById()
    },[id])

   const updateHandler = async (e) => {

        e.preventDefault()
       
        // update by put request

        const data = {
          Student_First_Name: firstName,
          Student_Last_Name: lastName,
          Student_Email: email,
          Date_of_Birth: dateofBirth,
          Student_Gender:gender
        }

        await axios.put(`http://localhost:8000/api/student/:id/${id}`, data)
        toast.success("Student Update successfull")
        //Navigate.push('/admin-dashboard')

   }
  return (
   <EditStudentWrapper>
    <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">Edit Student</h1>
     
    </div>
    
    <div className="userContainer">
      <div className="userShow">
        <div className="userShowTop">
         
          <div className="userShowTopTitle">
            <span className="userShowUsername">Anna Becker</span>
            <span className="userShowUserTitle">form iv</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">annabeck99</span>
          </div>
          <div className="userShowInfo">
            <CalendarToday className="userShowIcon" />
            <span className="userShowInfoTitle">10.12.1999</span>
          </div>
          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">+1 123 456 67</span>
          </div>
          <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
          </div>
          <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">New York | USA</span>
          </div>
        </div>
      </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <form className="userUpdateForm" onSubmit={updateHandler}>
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Student First Name</label>
              <input
                type="text"
                placeholder="annabeck99"
                className="userUpdateInput"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="userUpdateItem">
              <label>Student Last Name</label>
              <input
                type="text"
                placeholder="Anna Becker"
                className="userUpdateInput"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="userUpdateItem">
              <label>Student Email</label>
              <input
                type="text"
                placeholder="annabeck99@gmail.com"
                className="userUpdateInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="userUpdateItem">
              <label>Date of Birth</label>
              <input
                type="date"
                placeholder="+1 123 456 67"
                className="userUpdateInput"
                value={dateofBirth}
                onChange={(e) => setdateofBirth(e.target.value)}
              />
            </div>
            <div className="userUpdateItem">
              <label>Student Gender</label>
              <input
                type="text"               
                className="userUpdateInput"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
              />
            </div>
          </div>
          <div className="userUpdateRight">
            
            <button className="userUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
    

  </div>
  </EditStudentWrapper>
  )
}

export default Update