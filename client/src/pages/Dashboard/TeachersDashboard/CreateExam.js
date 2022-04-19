import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
// import * as React from 'react';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import axios from "axios";

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
  .inpu {
    margin: 2em 10em;

  }
  #cars{
    padding: 1em ;
  }
  .inpu input {
    box-shadow: 5px 10px 20px 10px rgba(0, 0, 0, 0.2);
    /* box-shadow: 5px 10px #888888; */
  }
  .inpu input {
    padding: 1em 1em 1em 1em;
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
    box-shadow: 5px 5px gray ;

  }
`;

export function CreateExam() {
  const [paperName, setPaperName] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/create/", {
        paperName,
        question,
      })
      .then((res) => {
        console.log("Question added Successfully");
      })
      .catch((err) => {
        console.log("Their was an error when adding question !! Try Again");
      });
  };
  return (
    <Container>
      <div className="head">
        <h2> Akeo Exam </h2> <button> Mark Exams </button>
        <Link to="/view-exams">
          <button> View Questions </button>{" "}
        </Link>{" "}
      </div>{" "}
      <div className="mane">
        <div className="reqform">
          <h2> Create New Exam </h2>{" "}
        </div>{" "}
        <form action="post">
          <h3 className="name"> Unit Name </h3>{" "}
          <div className="unit">
            <label> Choose a Unit: </label>
            <select
              id="cars"
              required
              name="paperName"
              size="1"
              value={paperName}
              onChange={(e) => setPaperName(e.target.value)}
            >
              <option> -- - Select Unit-- - </option>{" "}
              <option value="Javascript"> Javascipt </option>{" "}
              <option value="Node js"> Node js </option>{" "}
              <option value="3"> Python </option>{" "}
              <option value="4"> History </option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="text">
            <textarea
              required
              name="question"
              placeholder="Add exam Question here"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows="8"
              cols="60"
            ></textarea>{" "}
          </div>{" "}
          {/* <br /> */} <div> </div>{" "}
          <div className="inputs">
            <Stack spacing={2}>
              {" "}
              {/* <Pagination count={10} shape="rounded" /> */}{" "}
              <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                onChange={handleSubmit}
              />{" "}
            </Stack>{" "}
          </div>{" "}
          <div className="inpu">
            <input type="submit" value="Submit Questions" />
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </Container>
  );
}
