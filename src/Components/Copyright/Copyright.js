import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 15px 10px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    font-family: "DarkerGrotesque-Semibold";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
  }
`;
const Copyright = () => {
  return (
    <Wrapper>
      <div className="text">© 2022 Sintryx B.V. All rights reserved</div>
    </Wrapper>
  );
};
export default Copyright;
