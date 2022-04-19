
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";

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
function StudInfo() {
  return (
    <>
    <Feature>
      <div className="featuredItem">
        <span className="featuredTitle">My 
        Attendance</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">63%</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Grades</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2.4 GPA</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* <div className="featuredItem">
        <span className="featuredTitle">Courses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">115</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div> */}
    </Feature>
    </>
  )
}

export default StudInfo