import styled from 'styled-components';

export const CourseWrapper=styled.div`
    height: 100vh;

.courseListItem{
    display: flex;
    align-items: center;
}

.courseListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

.courseListEdit{
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
}

.courseListDelete{
    color: red;
    cursor: pointer;
}
`
