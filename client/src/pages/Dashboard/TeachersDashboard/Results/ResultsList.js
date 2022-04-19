import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  margin-left: 4em;
  margin-right: 4em;
  .styled {
    /* border-collapse: collapse ; */
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    /* min-width: 70em; */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  table {
    /* table-layout: fixed; */
    width: 100%;
    border-collapse: collapse;
    /* border: 0.5px solid ; */
  }
  .styled thead tr {
    text-align: left;
    color: gray;
    background: whitesmoke;

    /* vertical-align: middle;
  border-color: inherit; */
  }
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .styled th,
  .styled td {
    padding: 12px 15px;
  }
  .styled tbody tr {
    border-bottom: 1px solid #ddd;
    /* margin-bottom: 2rem; */
  }
`;

export const ViewResuilts = () => {
  const [resuilts, setResuilts] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/results/");
        //  res.status(200).send('Data Successfully obtained');
        console.log(res.data);

        const resuits = res.data;
        setResuilts(resuits);
      } catch (error) {
        console.log(error);
      }
    };

    getResults();
  }, []);

  // console.log(resuilts);

  // renderCell: (params) => {
  return (
    <>
      <Container>
        <div>
          <h1>STUDENTS RESULTS</h1>
        </div>
          <table className="styled">
            <thead>
              <tr>
                <th>Unit</th>
                <th>Class Test</th>

                <th>Exam </th>
                <th>Total Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            {resuilts.map((result, key) => (
            <tbody  key={key}>
              <tr>
                <td>{result.Results_Unit_Name}</td>

                <td>{result.Assessment_Results_Marks}</td>
                <td>{result.Exam_Results_Marks}</td>

                <td>{result.Total_Marks}</td>
                <td>{result.Grade}</td>
              </tr>
              <tr>
                {/* <td></td>
    
      <td></td>
      <td></td>

      <td></td>
      <td></td> */}
              </tr>
            </tbody>
            ))}
          </table>
        
      </Container>
    </>
  );
};
