import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
const Wrapper = styled.div`
  .myMarque {
    font-family: "DarkerGrotesque-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 100%;
    color: #ffffff;
    background: #000;
    width: 100%;
    padding: 8px 0;
    padding-bottom: 12px;
  }
  .overlay {
    --gradient-color: rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) !important;
    --gradient-width: 200px;
  }
`;
const Marque = () => {
  return (
    <Wrapper>
      <Marquee>
        <div className="myMarque">
          Decentralized Exchange | NFT Marketplace | Custodial Licensed
          Liquidity Pools | Venture Capital & Real Estate Investments |
          Fractionalised yields | Decentralized Exchange | NFT Marketplace |
          Custodial Licensed Liquidity Pools | Venture Capital & Real Estate
          Investments | Fractionalised yields
        </div>
      </Marquee>
    </Wrapper>
  );
};
export default Marque;
