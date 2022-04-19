import { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const AttendanceWrapper = styled.div`
*{  
padding: 0;
margin: 0;
box-sizing: border-box;
}  
  body {
    width: 100%;
    height: 50vh;
  }
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 50%;
    padding: 20px 100px;
  }
  .container:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("pic.jpg") no-repeat center;
    background-size: cover;
    z-index: -1;
    filter: blur(50px);
  }
  .attendance-box {
    max-width: 850px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
  }
  .left {
    height: 100%;
    background: url("pic.jpg") no-repeat center;
    background-size: cover;
  }
  .right {
    padding: 25px 40px;
  }
  .h2 {
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  h2:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: #2ecc71;
  }
  .field {
    width: 100%;
    padding: 0.5rem 1rem;
    outline: none;
    border: 2px solid rgba(0, 0, 0, 0);
    background-color: rgba(230, 230, 230, 0.6);
    font-size: 1.1rem;
    margin-top: 22px;
    transition: 3s;
  }
  .field:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .field:focus {
    background-color: #fff;
    border: 2px solid rgba(30, 85, 250, 0.47);
  }
  .btn {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    background-color: #2ecc71;
    cursor: pointer;
    outline: none;
    border: 2px solid rgba(0, 0, 0, 0);
    color: #fff;
    margin-top: 22px;
    transition: 0.3s;
  }
  .btn:hover {
    background-color: #27ae60;
  }

  @media screen and (max-width: 880px) {
    .attendance-box {
      grid-template-columns: 1fr;
    }
    .left {
      height: 200px;
    }
  }
`

function StudentAttendance() {
  const url = 'http://localhost:8000/api/attendance';
  const [ student, setStudent ] = useState("");
  const [ schoolDate, setSchoolDate ] = useState("");
  const [ studentArrivalTime, setStudentArrivalTime ] = useState("");
  const [ studentDepatureTime, setStudentDepatureTime ] = useState("");

  function submit(e) {
      console.log(schoolDate);
      console.log(studentArrivalTime);
      console.log(studentDepatureTime);
       
    e.preventDefault();
    Axios.post(url, {
      student,
      schoolDate,
      studentArrivalTime,
      studentDepatureTime
    }).then((res) => {
      console.log(res.data);
    });
  }
  
  return (
    <AttendanceWrapper>
      <div className='container'>
        <div className='attendance-box'>
          <div className='left'></div>
          <div className='right'>
          <form action='POST' onSubmit={submit}>
            <h2>Attendance Register</h2>
            <input
              onChange={(e) => { setStudent(e.target.value)}}
              id='text'
              name='student'
              value={student}
              placeholder='student id'
              type='number'
              className='field'
            ></input>
            <input
              onChange={(e) => { setSchoolDate(e.target.value)}}
              id='date'
              name='schoolDate'
              value={schoolDate}
              placeholder='date'
              type='date'
              className='field'
            ></input>
            <input
              onChange={(e) => { setStudentArrivalTime(e.target.value)}}
              id='time'
              name='studentArrivalTime'
              value={studentArrivalTime}
              type='time'
              className='field'
            ></input>
            <input
              onChange={(e) => { setStudentDepatureTime(e.target.value)}}
              id='time'
              name='studentDepatureTime'
              value={studentDepatureTime}
              type='time'
              className='field'
            ></input>
            <button  className='btn' type='submit'>
              Submit
            </button>
            </form>
          </div>
        </div>
      </div>
  
    </AttendanceWrapper>
  );
}

export default StudentAttendance;


