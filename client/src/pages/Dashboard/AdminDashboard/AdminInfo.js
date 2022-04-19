import React from 'react'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
const Feature = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .featuredItem {
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }

  .featuredTitle {
    font-size: 20px;
  }

  .featuredMoneyContainer {
    margin: 10px 0px;
    display: flex;
    align-items: center;
  }

  .featuredMoney {
    font-size: 30px;
    font-weight: 600;
  }

  .featuredMoneyRate {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .featuredIcon {
    font-size: 14px;
    margin-left: 5px;
    color: green;
  }

  .featuredIcon.negative {
    color: red;
  }

  .featuredSub {
    font-size: 15px;
    color: gray;
  }
`

function AdminInfo() {
    //student count
  const [students, setStudents] = useState(0);
 const [teachers,setTeachers] = useState(0);

  useEffect(() => {
    studentCount();
  }, [students]);

  useEffect(() => {
    teacherCount();
  }, [teachers]);


  const studentCount = async () => {
    const { data } = await axios.post('http://localhost:8000/api/student-count');
    //console.log("STUDENT COUNT => ", data);
    setStudents(data.length);
  };

  const teacherCount = async () => {
    const { data } = await axios.post('http://localhost:8000/api/teacher-count');
    //console.log("teacher COUNT => ", data);
    setTeachers(data.length);
  };
  return (
    <Feature>
      <div className="featuredItem">
        <span className="featuredTitle">Students</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{`${students} Enrolled`}</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Teachers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{`${teachers} Joined`}</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Courses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">11</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </Feature>
  )
}

export default AdminInfo