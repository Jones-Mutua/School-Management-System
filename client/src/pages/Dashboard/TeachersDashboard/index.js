import React, { useContext } from 'react'
import { DashboardWrapper } from '../AdminDashboard/Dashboard.style'
import DashboardTopbar from '../AdminDashboard/DashboardTopbar'
import { CreateExam } from './CreateExam'
import TeacherDashContainer from './TeacherDashContainer'
import { Navigate } from "react-router-dom";
import { UserContext } from "../../../App";

const TeacherDashboard = () => {
  const [user] = useContext(UserContext);

  // if (!user.accesstoken) {
  //   return <Navigate to='/' />;
  // }
  return (
    <DashboardWrapper>
        <DashboardTopbar />
        <TeacherDashContainer />
        {/* <CreateExam /> */}
    </DashboardWrapper>
  )
}

export default TeacherDashboard