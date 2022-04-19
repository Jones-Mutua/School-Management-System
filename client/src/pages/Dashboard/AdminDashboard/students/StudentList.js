
 import { DataGrid } from "@material-ui/data-grid";
 import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

 import axios from "axios";
 import {toast} from "react-toastify";

// import {StudentWrapper} from './StudentList.style'
import React, { useState, useEffect } from 'react'






const DataTable = () => {

  const [student, setStudent]=useState('')
  const [action , setAction]= useState('')
  const [values, setValues] = useState([
   { 
    Student_Id:"",
    Reg_Number:"",
    
    FirstName:"",
    Last_Name:"",
    User_Email:"",
    Student_Class:"",
   }
  ])
  useEffect(()=>{
    loadStudents();
    },[]);

  const loadStudents = async () => {
  const { data } = await axios.get('http://localhost:8000/api/view-student')
// console.log('this is the data',data);
   if (data) setValues(data);
   }
  
  // console.log('these are the values',values);

   const handleDelete = async (index) => {
     try{
      const answer = window.confirm("Are you sure you want to delete?");
      if (!answer) return;
     let deleteStudent = values.Student_Id;
     console.log(deleteStudent)
      const removed = deleteStudent.splice(index, 1);
      console.log("removed", removed[0]._id);
      setValues({ ...values, Student_Id: deleteStudent });
      // send request to server
      const { data } = await axios.destroy('http://localhost:8000/api/student/:id');
      console.log("STUDENT DELETED =>", data);
      toast("student is removed from the system.");

     }catch(err){
      toast("Student remove failed. Try again");
      console.log(err)

     }
   
  };
  
  const columns = [
    { field: 'Student_Id', hide: true , editable: false},
    { field: 'Reg_Number', headerName: 'REG Number',width: 200 ,editable: false },
    { field: 'Student_First_Name', headerName: 'FirstName', width: 200 },
    { field: 'Student_Last_Name', headerName: 'Last_Name', width: 200 },
    // { field: 'User_Email', headerName: 'User_Email', width: 200 },
    { field: 'Student_Class', headerName: 'Student_Class', width: 200 },
   {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
        
          <Link to={"/update-student/" + params.row.id}>
            <button className="courseListEdit">Edit</button>
          </Link>
          <DeleteOutline
        
            style={{ color:'red' ,
              cursor: 'pointer' }}
              onClick={handleDelete}
            //onClick={() => handleDelete(params.row.id)}
          />
          
        </>
      );
    },
  }
  ]
  
  

  return (
    <div style={{ height: 700, width: '100%' }}>
      <Link to = "/newstudent"> 
        <button style={{ 
        width: '80px',
        padding: '5px',
        color:'white',
        cursor: 'pointer',
        margin:'1.3em',
        size:'16px',
        background: 'teal'

       }}
        >create</button>

        </Link> 
      <DataGrid  
     
        rows={values}
        getRowId={(row) => row.Student_Id}
        columns={columns}
        pageSize={12}
       checkboxSelection
       
      />
    </div>
  )
}

export default DataTable

