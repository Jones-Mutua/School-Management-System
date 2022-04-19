import React, { useState } from 'react'
import { DashContentWrapper, DashWrapper, Sidebar } from './Dashboard.style';
import {
  LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    PostAdd,
    BarChart,
    
    MenuBookOutlined,
  } from "@material-ui/icons";
import { Link } from "react-router-dom";

import AdminLanding from './AdminLanding';
import StudentList from './students/StudentList';
import CourseList from './courseList/courseList';
import TeacherList from './Teachers/TeacherList'
//import Schedule from '../../../components/Schedule';
import Timetable from '../AdminDashboard/ExamSchedule/timetable'

const DashboardContainer = () => {
  const [visible, setVisible] = useState(false);
  const [courses, setCourses] = useState(false);
  const [student, setStudent] = useState(false);
  const [teachers, setTeachers] = useState(false);
  const [timetable, setTimetable]=useState(false);
  
  //student count
  // const [students, setStudents] = useState(0);
  // useEffect(() => {
  //   course && studentCount();
  // }, [course]);

  // const studentCount = async () => {
  //   const { data } = await axios.post(`/api/instructor/student-count`, {
  //     courseId: course._id,
  //   });
  //   console.log("STUDENT COUNT => ", data);
  //   setStudents(data.length);
  // };
  return (
      <DashWrapper>
      <Sidebar >
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active" onClick={() => {
                setVisible(false);
              }}>
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Courses
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem" onClick={() => {
                setVisible(true);
                setStudent(true);
              }}>
                  <PermIdentity className="sidebarIcon" />
                  Students
                </li>
              <li className="sidebarListItem" onClick={() => {
                setVisible(true);
                setTeachers(true);
              }}>
                  <PermIdentity className="sidebarIcon" />
                  Teachers
                </li>
              <li className="sidebarListItem" onClick={() => {
                setVisible(true);
                setCourses(true);
              }}>
                  <MenuBookOutlined className="sidebarIcon" />
                  Courses
                </li>
                
                <li className="sidebarListItem" onClick={() => {
                setVisible(true);
                setTimetable(true);
              }}>
                  <PostAdd className="sidebarIcon" />
                  Exam Schedule
                </li>
                
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
          {/* <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div> */}
        </div>
      </Sidebar>


      <DashContentWrapper>
        {!visible ? <AdminLanding /> : null}
        {visible && student && !courses ? <StudentList /> : null}
        {visible && teachers  && !courses ?<TeacherList /> : null}
        {visible && courses && student ? <CourseList/> : null}
        {visible && timetable && !courses  ? <Timetable/> : null}
       
        
      </DashContentWrapper>
      </DashWrapper>
      
  )
}

export default DashboardContainer