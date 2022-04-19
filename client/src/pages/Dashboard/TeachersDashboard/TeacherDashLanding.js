import React from 'react'
import styled from "styled-components";
import TeacherChart from './TeacherChart';
import TrInfo from './TrInfo'
import { teacherData } from '../../../config/db.config';
// import { CreateExam } from './CreateExam';
// import  {ViewExam}  from './viewExam';




const Home = styled.div`
    width: 100%;
`

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`

const TeacherDashLanding = () => {
  return (
      <>

          <Home>
              <TrInfo />
              <TeacherChart data={teacherData} title="class Performance" grid dataKey="Courses" />

          </Home>
          <HomeWidgets>
              {/* <Widget /> */}
             
          </HomeWidgets>
          {/* <CreateExam /> */}
          {/* <ViewExam /> */}

      </>
  )
}

export default TeacherDashLanding