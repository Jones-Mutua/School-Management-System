import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Container = styled.div`
  margin-left: 5em;
  margin-right: 5em;
  .styled {
    /* border-collapse: collapse ; */
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    /* min-width: 70em; */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    /* border: 0.5px solid ; */
  }
  .styled thead tr {
    text-align: left;
    color: gray;
    background: whitesmoke;
  }

  .styled th,
  .styled td {
    padding: 2em ;
  }
  .styled tbody tr {
    border-bottom: 1px solid #ddd;
    /* margin-bottom: 2rem; */
  }
`;

export const ViewAttendance = () => {
  const [attends, setAttends] = useState([]);
  useEffect(() => {
    const getAttend = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/attend/");
        //  res.status(200).send('Data Successfully obtained');
        console.log(res.data);

        const myAttend = res.data;
        setAttends(myAttend);
      } catch (error) {
        console.log(error);
      }
    };

    getAttend();
  }, []);

  console.log(attends);

  return (
    <>
      <Container>
        <div className="attend">
          <h1>Attendance Records</h1>
        </div>
        <table className="styled">
          <thead>
            <tr>
              <th> Teacher Id </th>
              <th> Teacher Name</th>

               <th> Work_Date </th>
              <th> Arrival Time </th> <th> Departure Time </th>
            </tr>
          </thead>
          {attends.map((attends, key) => (
            <tbody key={key}>
              <tr>
                <td> {attends.Teacher} </td>
                <td> {attends.Teacher_Name} </td>

                <td> {attends.Work_Date} </td>
                <td> {attends.Teacher_Arrival} </td>
                <td> {attends.Teacher_Depature} </td>
              </tr>
            </tbody>
          ))}
        </table>
      </Container>
    </>
  );
};
