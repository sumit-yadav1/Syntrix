import React from "react";

import styled from "styled-components";
const Wrapper = styled.div`
  .switch-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: #ffffff;
    border: 1px solid #000;
    border-radius: 8px;
    height: 35px;
    width: 100px;
    transition: 1s;
    z-index: 5;
  }
  .left {
    width: 49px;
    height: 100%;
    cursor: pointer;
    transition: 1s;
  }
  .right {
    width: 49px;
    height: 100%;

    height: 43px;
    cursor: pointer;
    transition: 1s;
  }
  .ball {
    position: absolute;

    top: 50%;

    transform: translateY(-50%);
    background: #000;
    height: 80%;
    width: 40%;
    margin: 0 5px;
    transition: 0.3s;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 0.5px;
  }
  .move {
    transform: translate(120%, -50%);
    transition: all 0.3s ease;
  }
  .circle {
    background: #2d4cff;
  }
  @media only screen and (max-width: 767px) {
    .switch-container {
      height: 38px;
      width: 80px;
    }
    .left {
      width: 39px;
      height: 37px;
      cursor: pointer;
      transition: 1s;
    }
    .right {
      width: 39px;
      height: 100%;
      height: 37px;
      cursor: pointer;
      transition: 1s;
    }
  }
`;
const MySwitch = ({ active, setActive }) => {
  return (
    <Wrapper>
      <div className="switch-container ">
        <div className="left" onClick={() => setActive(true)}></div>
        <div className="right" onClick={() => setActive(false)}></div>
        <div
          className={`ball ${!active && "move"}`}
          onClick={() => setActive((prev) => !prev)}
        >
          <div className="circle"></div>
        </div>
      </div>
    </Wrapper>
  );
};
export default MySwitch;
