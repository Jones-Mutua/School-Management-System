import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, {useState,useEffect} from "react";
import axios from 'axios';
import styled from "styled-components";


const Feature = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .featuredItem {
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }

  .featuredTitle {
    font-size: 20px;
  }

  .featuredMoneyContainer {
    margin: 10px 0px;
    display: flex;
    align-items: center;
  }

  .featuredMoney {
    font-size: 30px;
    font-weight: 600;
  }

  .featuredMoneyRate {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .featuredIcon {
    font-size: 14px;
    margin-left: 5px;
    color: green;
  }

  .featuredIcon.negative {
    color: red;
  }

  .featuredSub {
    font-size: 15px;
    color: gray;
  }
`;

function TrInfo() {
  const [attendance, setAttendance] = useState(0);
  
  const [attend, setAttend] = useState(0);
useEffect(() => {
  attendanceCount();
},[attendance]);

const attendanceCount = async ()  => {
  const {data} = await axios.get("http://localhost:8000/api/count/");
  setAttendance(data.rows.length);
  const period = 31;
  setAttend(Math.round((attendance / period) * 100));
  
}
  return (
    <>
    <Feature>
      <div className="featuredItem">
        <span className="featuredTitle">No of Students</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">0%</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Perfomance</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">0%</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Overall Attendance</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{`${attend}% `}</span>
      
        </div>attendance
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
    </Feature>
    </>
  )
}

export default TrInfo