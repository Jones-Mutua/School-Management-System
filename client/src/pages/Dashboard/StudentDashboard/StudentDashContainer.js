import React, { useState } from 'react'
import { DashContentWrapper, DashWrapper, Sidebar } from '../AdminDashboard/Dashboard.style';
import {
    LineStyle,
    Timeline,
    EventAvailableOutlined,
    PermIdentity,
    DateRange,
    PostAdd,
    BarChart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import StudentDashLanding from './StudentDashLanding';
import StudentAttendance from "../../Dashboard/StudentDashboard/StudentAttendance"

const StudentDashContainer = () => {
    const [visible, setVisible] = useState(false);
    const [attendance, setAttendance] = useState(false);
    const [results, setResults] = useState(false);

  return (
    <DashWrapper>
        <Sidebar>
              <div className="sidebarWrapper">
                  <div className="sidebarMenu">
                      <h3 className="sidebarTitle">STUDENT</h3>
                      <ul className="sidebarList">
                          <Link to="/" className="link">
                              <li className="sidebarListItem active">
                                  <LineStyle className="sidebarIcon" />
                                  Home
                              </li>
                          </Link>
                          <li className="sidebarListItem">
                              <Timeline className="sidebarIcon" />
                              Performance
                          </li>

                      </ul>
                  </div>
                  <div className="sidebarMenu">
                      <h3 className="sidebarTitle">Quick Menu</h3>
                      <ul className="sidebarList">
                          
                          <li className="sidebarListItem" onClick={() => {
                                setVisible(true);
                                setAttendance(true);
                            }}>
                                  <PermIdentity className="sidebarIcon" />
                                  Attendance
                              </li>

                        <li className="sidebarListItem" onClick={() => {
                                setVisible(true);
                                setResults(true);
                            }}>
                                  <PermIdentity className="sidebarIcon" />
                                  Results
                              </li>
                          {/* <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li> */}
                          <li className="sidebarListItem">
                              <BarChart className="sidebarIcon" />
                              Reports
                          </li>
                      </ul>
                  </div>


              </div>
        </Sidebar>

        <DashContentWrapper>
            {!visible ? <StudentDashLanding /> : null}
            {visible && attendance && !results ? <StudentAttendance /> : null}
            {/* {visible && results && attendance ? <CourseList/> : null} */}
        </DashContentWrapper>
    </DashWrapper>
  )
}

export default StudentDashContainer