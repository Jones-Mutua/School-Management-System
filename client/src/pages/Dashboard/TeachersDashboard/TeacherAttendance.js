import { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AttendanceWrapper = styled.div`
  * {
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
    content: "";
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
    content: "";
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
  .head button {
    padding: 1em;
    margin-top: 2em;
    font-size: 1em;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .head button:hover {
    // background-color: gray;
    background: whitesmoke;
  }
  .head {
    display: flex;
    justify-content: space-between;
    margin-right: 10em;
    margin-left: 5em;
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
`;

function TeacherAttendance() {
  const url = "http://localhost:8000/api/mark";
  const [Teacher, setTeacher] = useState("");
  const [Teacher_Name, setTeacherName] = useState("");

  const [Work_Date, setWorkDate] = useState("");
  const [Teacher_Arrival, setTeacherArrival] = useState("");
  const [Teacher_Depature, setTeacherDepature] = useState("");

  function submit(e) {
    console.log(Work_Date);
    console.log(Teacher_Arrival);
    console.log(Teacher_Depature);

    e.preventDefault();
    Axios.post(url, {
      Teacher,
      Teacher_Name,
      Work_Date,
      Teacher_Arrival,
      Teacher_Depature,
    }).then((res) => {
      toast("You have Marked Attendance");

      console.log(res.data);
    });
  }

  return (
    <AttendanceWrapper>
      <div className="head">
        <h2>Akeo Attendance</h2>
        <Link to="/attendance/">
          <button>My Attendance</button>
        </Link>
      </div>
      <div className="container">
        <div className="attendance-box">
          <div className="left"></div>
          <div className="right">
            <form action="POST" onSubmit={submit}>
              <h2>Teacher Register</h2>
              <input
                onChange={(e) => {
                  setTeacher(e.target.value);
                }}
                id="text"
                name="teacher"
                required
                value={Teacher}
                placeholder="Teacher id"
                type="number"
                className="field"
              ></input>
              <input
              onChange={(e) => {
                setTeacherName(e.target.value);
              }}
              id="text"
              required
              name="teacher"
              value={Teacher_Name}
              placeholder="Teacher Name"
              type="text"
              className="field"
            ></input>
              <input
                onChange={(e) => {
                  setWorkDate(e.target.value);
                }}
                id="date"
                required
                name="Work_Date"
                value={Work_Date}
                placeholder="date"
                type="date"
                className="field"
              ></input>
              <input
                onChange={(e) => {
                  setTeacherArrival(e.target.value);
                }}
                id="time"
                required
                name="Teacher_Arrival"
                value={Teacher_Arrival}
                type="time"
                className="field"
              ></input>
              <input
                onChange={(e) => {
                  setTeacherDepature(e.target.value);
                }}
                id="time"
                required
                name="Teacher_Depature"
                value={Teacher_Depature}
                type="time"
                className="field"
              ></input>
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </AttendanceWrapper>
  );
}

export default TeacherAttendance;
