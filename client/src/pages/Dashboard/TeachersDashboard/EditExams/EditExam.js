import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import {useHistory} from 'react-router-dom'
import axios from "axios";
import { useParams } from "react-router";

const Container = styled.div`
  .mane {
    margin: 30px;
    background: whitesmoke;
    height: 70vh;
    width: 60em;
    align-items: center;
    display: flex;
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
  .regform h2 {
    text-transform: capitalize;
    font-weight: bold;
  }
  .inputs {
    display: flex;
    margin: 2em 0em;
    justify-content: space-around;
  }
  .head {
    display: flex;
    justify-content: space-between;
    margin-right: 10em;
    margin-left: 5em;
  }
  .head button {
    padding: 1em;
    margin-top: 2em;
  }
`;

export function EditExam() {
  const [examName, setExamName] = useState("");
  const [question, setQuestion] = useState("");
  const { Exam_Question_Id } = useParams();
  // const history = useHistory();

  const handleSubmit = async (Exam_Question_Id) => {
    const data = {
      examName: examName,
      question: question,
    };
    console.log(data)
    await axios.put(
      `http://localhost:8000/api/exams/${Exam_Question_Id}`,
      data
    );
    // history.push('../ViewExam.js')
  };
  useEffect(() => {
    const getDataById = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/exam/${Exam_Question_Id}`
      );
      setExamName(data.examName);
      setQuestion(data.question);
      // .then((res) => {
      //   console.log(res.data);
      // })
      // .catch((err) => {
      //   console.log(err.data.message);
      // });
    };
    getDataById();
  }, [Exam_Question_Id]);
  return (
    <Container>
      <div className="head">
        <h2>Akeo Exam </h2>
      </div>
      <div className="mane">
        <div className="reqform">
          <h2>Edit Question</h2>
        </div>
        <form action="post">
          <h3 className="name">Unit Name</h3>
          <div className="unit">
            <label>Choose a Unit:</label>

            <select
              id="cars"
              required
              name="examName"
              size="1"
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
            >
              <option>---Select Unit---</option>
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
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows="8"
              cols="60"
            ></textarea>
          </div>
          {/* <br /> */}
          <div className="inputs">
            <input type="submit" value="Update" onClick={(e) => handleSubmit(Exam_Question_Id)} />
          </div>
        </form>
      </div>
    </Container>
  );
}
