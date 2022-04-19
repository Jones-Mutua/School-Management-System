import React, { useContext } from 'react';
import {DashboardWrapper} from '../AdminDashboard/Dashboard.style'
import DashboardTopbar from '../AdminDashboard/DashboardTopbar'
import StudentDashContainer from './StudentDashContainer'
import { Navigate } from "react-router-dom";
import { UserContext } from "../../../App";


const StudentDashboard = () => {
  const [user] = useContext(UserContext);

  if (!user.accesstoken) {
    return <Navigate to='/' />;
  }
  return (
    <DashboardWrapper >
        <DashboardTopbar />
        <StudentDashContainer />
    </DashboardWrapper>
  )
}

export default StudentDashboard