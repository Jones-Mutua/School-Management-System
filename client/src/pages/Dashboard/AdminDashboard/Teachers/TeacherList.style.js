import styled from "styled-components";

export const TeacherWrapper = styled.div`
width: 100%;
height: 100vh;
margin-top: 3em;

.userListUser {
  display: flex;
  align-items: center;
}
.userAddButton {
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  margin-bottom: 1.3em;

}
.userListImg {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}
.userTitleContainer {
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 1rem;
}

.MuiDataGrid-root {
    margin: 0 1rem;
}

.userListEdit{
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
}

.userListDelete{
    color: red;
    cursor: pointer;
}
`