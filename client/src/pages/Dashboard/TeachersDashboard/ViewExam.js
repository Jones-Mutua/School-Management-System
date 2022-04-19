import React, { useState ,useEffect} from 'react'
import styled from "styled-components";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';
import {toast} from "react-toastify";


const Container = styled.div`
margin-left: 4em;
margin-right: 4em;
.styled {

  /* border-collapse: collapse ; */
  margin: 25px 0 ;
  font-size: 0.9em;
  font-family: sans-serif;
  /* min-width: 70em; */
  box-shadow: 0 0 20px  rgba(0, 0, 0, 0.2);

}
.head h1{
  text-transform: uppercase;
}
.head{
  display: flex;
  justify-content: space-between
}
.head button {
  /* background-color: green; */
  padding: 1em ;
  margin-top: 2em;
  box-shadow: 0 0 20px  rgba(0, 0, 0, 0.2);

}
.head button:hover{
  color: gray;
  /* background-color:  white; */
}


.edit {
  /* background-color: blue; */
  position: relative;
  margin:2em ;
}
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  /* border: 0.5px solid ; */
}
.styled Button{
  /* display: flex;
  flex-direction: column; */
  margin-bottom: 2em;
}
.styled thead tr{
  text-align: left;
  color: gray;
  background: whitesmoke ;
  padding-top: 2em;
  padding-bottom:10em ;
}
.styled th,
.styled td {
  padding: 2em 15px ;
}
.styled tbody tr{
  border-bottom: 1px solid #ddd;
  /* margin-bottom: 2rem; */
}
`


export const ViewExam = () => {
  const [exam, setExam] = useState([]);
  const {Exam_Question_Id} = useParams();

  
useEffect(() =>  {
  const getExam = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/exams/");
      //  res.status(200).send('Data Successfully obtained');
      console.log("Data Successfully obtained");

const myExam = res.data;
setExam(myExam)
    } catch (error) {
      console.log(error)

    }
  };
  getExam();

}, [exam]);
  
  
  // console.log(exam);

const deteteQuestion = (Exam_Question_Id,e) => {
  e.preventDefault();
  axios.delete(`http://localhost:8000/api/examDel/${Exam_Question_Id}`)
  .then(res => {
    console.log('Deleted Successfully');
    // res.status(200).send('Deleted Successfully');
    toast("quesion is deleted from the system.");
    
  })
  .catch(err => console.log(err));
  // toast("Delete failed. Try again");

}

// renderCell: (params) => {
  return (
  
    < >
    <Container>
      <div className='head'>
     <button>Back Home </button>
     <h1>Exam Questions</h1>
     <h3>Akeo School</h3>
     </div>
 

<table className="styled" 

>
  <thead>
    <tr>
      <th>Question</th>
      <th>Unit Name</th>
   
      <th>Action</th>

    </tr>
  </thead>
  {exam.map((exams, key) => (
  <tbody key={key}>
   

    <tr>
   
    <td>{exams.Exam_Question}</td>
    
      <td>{exams.Exam_Paper_Name}</td>
      <Link to={`/editExam/${exams.Exam_Question_Id}` + Exam_Question_Id}>
      <Button variant="secondary" className="edit"> Edit</Button>
</Link>
      <Button variant="danger"  onClick={(e) => deteteQuestion(exams.Exam_Question_Id,e)}>Delete</Button>
      {/* <Button variant="success" >Save</Button> */}

    </tr>

  </tbody>
      ))}

</table>

    </Container>
    </>
      
  )
}

