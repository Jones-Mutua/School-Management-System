import React from 'react'
import StudInfo from './StudInfo';
import styled from "styled-components";
import { studentData } from '../../../config/db.config';
import StudentChart from './StudentChart';


const Home = styled.div`
    width: 100%;
`

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`

const StudentDashLanding = () => {
    return (
        <>
            <Home>
                <StudInfo></StudInfo>
                <StudentChart data={studentData} title="My Performance" grid dataKey="Marks" />

            </Home>
            <HomeWidgets>
                {/* <Widget /> */}

            </HomeWidgets>

        </>
    )
}

export default StudentDashLanding