





import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "react-datetime/css/react-datetime.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import TeacherDashboard from './pages/Dashboard/TeachersDashboard';
import Dashboard from './pages/Dashboard/AdminDashboard';
import Login from './pages/Login';
import { ViewExam } from './pages/Dashboard/TeachersDashboard/ViewExam';
import CreateTeacher from './pages/Dashboard/AdminDashboard/Teachers/AddTeacher';

import Update from './pages/Dashboard/AdminDashboard/students/Update'
import CreateStudent from './pages/Dashboard/AdminDashboard/students/createStudent';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { EditExam } from './pages/Dashboard/TeachersDashboard/EditExams/EditExam';
import { ViewAttendance } from './pages/Dashboard/TeachersDashboard/Results/ViewAttendance';
//import { Modal } from 'react-bootstrap';
 //Modal.setAppElement('#root')

export const UserContext = React.createContext([]);

// Modal.setAppElement('#root')
function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const refresh = async () => {
      try {
        const result = await axios.post(`/api/refresh_token`, user.User_Email);
        
        //console.log(result);
        localStorage.setItem(
          "user", result.data.accesstoken,
        );
        //console.log({user});
        
      } catch (error) {
        console.log(error);
      }
    };
    refresh()


    const axiosJwt = axios.create();

    axiosJwt.interceptors.request.use(
      async (config) => {
        let currentDate = new Date();
        const decodedToken = jwt_decode(user.accesstoken);
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
          const data = await refresh();

          config.headers["authorization"] = data.data.accesstoken
        }
        return config;
      }, (error) => {
        return Promise.reject(error);
      }
    )
  }, []);
  

  return (

    <UserContext.Provider value={[user, setUser]}>
    <ToastContainer position="top-center" /> 
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/newstudent" element={<CreateStudent />} />
          <Route path="/view-exams" element={<ViewExam/>} />
          <Route path="/newstudent" element={<CreateStudent />} />        
          <Route path="/newstudent" element={<CreateStudent />} />
          <Route path="/editExam:/Exam_Question_Id" element={<EditExam />} />
          <Route path="/attendance" element={<ViewAttendance />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;