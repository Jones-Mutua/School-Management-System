import "./courseList.style.js";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { courseRows } from "../../../../config/db.config";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CourseWrapper } from "./courseList.style.js";

export default function CourseList() {
  const [data, setData] = useState(courseRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "course",
      headerName: "Course",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="courseListItem">
            <img className="courseListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "classes", headerName: "Classes", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "students",
      headerName: "Students",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="courseListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="courseListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <CourseWrapper>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </CourseWrapper>
  );
}
