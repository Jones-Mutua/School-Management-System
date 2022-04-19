import styled from "styled-components";

export const StudentWrapper = styled.div`
width: 100%;
height: 100vh;

.userTitleContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.userListUser {
  display: flex;
  align-items: center;
}

.userListImg {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
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