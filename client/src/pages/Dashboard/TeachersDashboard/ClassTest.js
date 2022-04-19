import React, { useState } from "react";
import styled from "styled-components"; 
// import {Link} from 'react-router-dom'

import axios from "axios";

const Container = styled.div`
  .mane {
    margin: 30px;
    background: whitesmoke;
    height: 70vh;
    width: 60em;
    align-items: center;
    display:flex;
    flex-direction: column;
    overflow-y: hidden;
  }
  
  .unit {
    text-transform: capitalize;
    align-items: center;
    margin-bottom: 2.5rem;
  }
  /* .text {
  margin-bottom:20em ;
} */
  #cars {
  }
  .regform h2{
    text-transform: capitalize;
    font-weight: bold;
  }
  .inputs {
    display: flex;
 margin: 2em 0em;
 justify-content: space-around
  }
  .head{
    display: flex;
    justify-content: space-between;
    margin-right: 10em;
    margin-left:5em ;
  }
  .head button{
    padding: 1em;
    margin-top: 2em;
  }
`;

export function ClassTest() {
  const [Assessment_Paper, setExamName] = useState("");
  const [Assessment_Question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/create/", {
        Assessment_Paper,
        Assessment_Question,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.data.message);
      });
  };
  return (
    <Container>
      <div className="head">
        <h2>Akeo Exam  </h2>
       {/* <Link to='/view-exams'>
       <button>View Questions</button>       
       </Link> */}
      </div>
      <div className="mane">
        <div className="reqform">
          <h2>Create New Exam</h2>
        </div>
        <form action="post">
          <h3 className="name">Unit Name</h3>
          <div className="unit">
            <label>Choose a Unit:</label>
            {/* <input type="number" name="examName" id="" value={examName} onChange={(e) => setExamName(e.target.value)} /> */}
            <select
              id="cars"
              required
              name="examName"
              size="1"
              value={Assessment_Paper}
              onChange={(e) => setExamName(e.target.value)}
            >
              <option value="1">Javascipt</option>
              <option value="2">Php</option>
              <option value="3">Python</option>
              <option value="4">History</option>
            </select>
          </div>
          <div className="text">
            <textarea
            required
              name="question"
              placeholder="Add exam Question here"
              value={Assessment_Question}
              onChange={(e) => setQuestion(e.target.value)}
              rows="8"
              cols="60"
            ></textarea>
          </div>
          {/* <br /> */}
<div className="inputs">
          {/* <input type="button" value="+ Create" /> */}
          <input type="button" value="<Prev" />
          <input type="button" value="Next>" />
          <input type="submit" value="Submit" onChange={handleSubmit} />
          </div>
        </form>
      </div>
    </Container>
  );
}
