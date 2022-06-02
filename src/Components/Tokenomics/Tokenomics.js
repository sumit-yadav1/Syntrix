import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 90px 0;
  padding-bottom: 45px;
  .title {
    font-family: "DarkerGrotesque-Bold";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 140%;
    color: #000000;
  }
  .text {
    font-family: "DarkerGrotesque-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 100%;
    color: #000000;
  }
  .button {
    display: block;
    padding: 10px 16px;
    border: 1px solid;
    background: #000;
    border: 1px solid #000000;
    font-family: "DarkerGrotesque-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    color: #fff;
    text-decoration: none;
    padding-bottom: 12px;
  }
  .image {
    width: 100%;
  }
  @media only screen and (max-width: 520px) {
    .button {
      font-size: 18px;
    }
  }
`;
const Tokenomics = () => {
  return (
    <Wrapper>
      <Col xs={11} md={10} xxl={9} className="mx-auto">
        <Row className="align-items-center justify-content-between">
          <Col md={6}>
            <h2 className="title">Tokenomics</h2>
            <p className="text py-3">
              Sintryx’s GLARE approach incentivises Property Vault holders to{" "}
              extend allocation of Sintryx tokens over time, which in turn
              distributes liquidity withdrawal over time and aims to protect
              Investors and Owners against sudden liquidity runs.
            </p>
            <div className="d-none d-md-block">
              <p className="text pt-3">
                The total token supply is 1.000.000.000 through Pre-Sales.
              </p>
              <p className="text pb-3">
                The soft cap is $600.000 with an initial circulating supply of
                20.000.000 and Market Cap of $270.000. The price per token is
                $0,02.
              </p>{" "}
              <div className="d-flex justify-content-start">
                <a
                  href="#/"
                  className="button read-docs d-flex align-items-center justify-content-center"
                >
                  <span> DOWNLOAD TOKENOMICS</span>
                </a>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <img
              src="./images/TOKENOMICS.svg"
              alt="#"
              className="image my-4 my-md-0 d-none d-md-block"
            />{" "}
            <img
              src="./images/mobileTokenomics.svg"
              alt="#"
              className="image my-4 my-md-0 d-block d-md-none"
            />
            <div className="d-md-none">
              <p className="text pt-3">
                The total token supply is 1.000.000.000 through Pre-Sales.
              </p>
              <p className="text pb-3">
                The soft cap is $600.000 with an initial circulating supply of
                20.000.000 and Market Cap of $270.000. The price per token is
                $0,02.
              </p>{" "}
              <div className="d-flex justify-content-start">
                <a
                  href="#/"
                  className="button read-docs d-flex align-items-center justify-content-center"
                >
                  <span> DOWNLOAD TOKENOMICS</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};
export default Tokenomics;
