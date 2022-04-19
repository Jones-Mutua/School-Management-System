import React, { useState } from "react";
import {
  DashContentWrapper,
  DashWrapper,
  Sidebar,
} from "../AdminDashboard/Dashboard.style";
import {
  LineStyle,
  Timeline,
  AccountBox,
  DateRange,
  PostAdd,
  BarChart,

} from "@material-ui/icons";
import { Link } from "react-router-dom";
import TeacherDashLanding from "./TeacherDashLanding";
import { CreateExam } from "./CreateExam";
// import {ClassTest} from './ClassTest';
import {ViewResuilts} from  './Results/ResultsList';
import TeacherAttendance from "./TeacherAttendance";
// import { EditExam } from "./Edit Exam/edit";

const TeacherDashContainer = () => {
  const [visible, setVisible] = useState(false);
  const [exam, setExam] = useState(false);
  // const [edit, setEdit] = useState(false);
  const [results, setResults] = useState(false);
  const [attend, setAttend] = useState(false);

  return (
    <DashWrapper>
      <Sidebar>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Teacher Dashboard</h3>
            <ul className="sidebarList">
              
                <li className="sidebarListItem active" 
                onClick={() => {   setVisible(true) }}
                           >
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
            
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                class
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              {/* <Link to="/students" className="link"> */}
                <li className="sidebarListItem"    onClick={() => {
                    setVisible(true);
                    setResults(true);
                  }}>
                  <AccountBox className="sidebarIcon" />
                  Students
                </li>
              {/* </Link> */}
           
                <li
                  className="sidebarListItem"
                  onClick={() => {
                    setVisible(true);
                    setExam(true);
                  }}
                >
                  <PostAdd className="sidebarIcon" />
                  Exams
                </li>
{/*        
                <li
                  className="sidebarListItem"
                  onClick={() => {
                    setVisible(true);
                    setEdit(true);
                  }}
                >
                  <PostAdd className="sidebarIcon" />
                exam edit
                </li> */}
                            <li className="sidebarListItem"
                       onClick={() => {
                        setVisible(true);
                        setAttend(true);
                      }}
                  >
                  <DateRange className="sidebarIcon" />
                  Attendance
                </li>
            
           
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </Sidebar>

      <DashContentWrapper>
        {!visible ? <TeacherDashLanding /> : null}
        {visible && exam && !results? <CreateExam/> : null}
        {visible && results && !exam ?<ViewResuilts/> : null}
      
        {visible && attend && !results ? <TeacherAttendance /> : null}
        {/* {visible && edit && !exam ? <EditExam /> : null}; */}
      </DashContentWrapper>
    </DashWrapper>
  );
};

export default TeacherDashContainer;
