import React, { useContext } from 'react'
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from "../../../App";
// import LogoutIcon from '@mui/icons-material/Logout';

const Topbar = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
  `
const TopbarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
const TopLeft = styled.div`
  `
const Logo = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: darkblue;
    cursor: pointer;
  `

const TopRight = styled.div`
      display: flex;
      align-items: center;
  `

const TopbarIconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
  `

const TopIconBadge = styled.span`
      width: 15px;
      height: 15px;
      position: absolute;
      top: -5px;
      right: 0px;
      background-color: red;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
  `
const TopAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`

const DashboardTopbar = () => {
  const [user, setUser] = useContext(UserContext); 
  const navigate = useNavigate();

  const logoutCallback = async () => {
    localStorage.clear();
    setUser({});
    navigate('/');
    
  };

  return (
      <Topbar>
          <TopbarWrapper>
              <TopLeft>
                  <Logo>akeo Dashboard</Logo>
              </TopLeft>
              <TopRight>
              <button style={{}} onClick={logoutCallback} >Logout</button>
                  <TopbarIconContainer>
                      <NotificationsNone />
                      <TopIconBadge>2</TopIconBadge>
                  </TopbarIconContainer>
                  <TopbarIconContainer>
                      <Language />
                      <TopIconBadge>2</TopIconBadge>
                  </TopbarIconContainer>
                  <TopbarIconContainer>
                      <Settings />
                  </TopbarIconContainer>
                  <TopAvatar src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'></TopAvatar>
                 
              </TopRight>

          </TopbarWrapper>
      </Topbar>

  )
}

export default DashboardTopbar