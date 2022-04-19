
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
// import form from './AddTeacher/'

import React, { useState, useEffect } from 'react'






const DataTable = () => {

  const [teacher, setTeacher]=useState('')
  const [action , setAction]= useState('')
  const [values, setValues] = useState([
   { 
    Teacher_Id:"",
    Staff_Id:"",    
    First_Name:"",
    Last_Name:"",
    User_Email:"",
    Teacher_Class:"",
   }
  ])
  useEffect(()=>{
    loadTeachers();
    },[]);

  const loadTeachers = async () => {
  const { data } = await axios.get('http://localhost:8000/api/view-teacher')
 console.log(data);
   if (data) setValues(data);
   }
   const handleDelete = async () => {
 
    try {
     
      const { data } = await axios.destroy('http://localhost:8000/api/:id');
      toast("student is removed from the system.");
      setTeacher(data);
    } catch (err) {
      toast("Student remove failed. Try again");
    }
  };
  const columns = [
    { field: 'Teacher_Id', hide: true},
    { field: 'Staff_Id', headerName: 'Staff ID',width: 200  },
    { field: 'Teacher_First_Name', headerName: 'First Name', width: 200 },
    { field: 'Teacher_Last_Name', headerName: 'Last Name', width: 200 },
    // { field: 'User_Email', headerName: 'User_Email', width: 200 },
    { field: 'Teacher_Class', headerName: 'Teacher Class', width: 200 },
   {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
        
          <Link to={"/update-teacher/" + params.row.id}>
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


