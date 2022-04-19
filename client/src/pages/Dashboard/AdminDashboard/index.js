import React, { useContext } from 'react'
import { DashboardWrapper } from './Dashboard.style'
import DashboardContainer from './DashboardContainer'
import DashboardTopbar from './DashboardTopbar'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";

const Dashboard = () => {
  const [user] = useContext(UserContext);
  const navigate = useNavigate();

  // if (!user.accesstoken) {
  //   return <Navigate to='/' />;
  // }
  const localUser = localStorage.getItem("user")

  if (!localUser[0]) {
    navigate('/')
  }
  return (
      <DashboardWrapper>
          <DashboardTopbar />
          <DashboardContainer />
      </DashboardWrapper>
  )
}

export default Dashboard