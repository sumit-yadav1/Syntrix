import React from "react";
import { Col } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";
import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 90px 0;
  padding-top: 200px;
  background: url("./images/herobg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .myWrapper {
    position: relative;
  }

  .myHeroText {
    position: absolute;
    top: 50%;
    left: 20px;
    right: 20px;
    transform: translateY(-50%);
    z-index: 1;
  }
  .heroImage {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    height: 100%;
  }
  .title {
    font-family: "DarkerGrotesque-Bold";
    font-size: 67.2px;
    padding-bottom: 25px;
    width: 80%;
  }
  .text {
    font-family: "DarkerGrotesque-Regular";
    font-size: 24px;
    padding: 30px 0;
    width: 80%;
  }
  .button {
    display: block;
    padding: 8px 16px;
    border: 1px solid;
    background: #ffffff;
    border: 1px solid #000000;
    font-family: "DarkerGrotesque-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    color: #000000;
    text-decoration: none;
  }
  .read-docs {
    margin-right: 10px;
  }
  .active {
    color: #fff;
    background: #000;
  }
  @media only screen and (max-width: 1399px) {
    .title {
      width: 75%;
    }
    .text {
      width: 75%;
    }
  }
  @media only screen and (max-width: 1199px) {
    .title {
      font-size: 52px;
    }
    br {
      display: none;
    }
  }

  @media only screen and (max-width: 991px) {
    .title {
      font-size: 50px;

      width: 100%;
    }
    .heroImage {
      height: 80%;
      top: 0;
      transform: translateY(0%) translateX(50%);
    }
  }
  @media only screen and (max-width: 767px) {
    background: url("./images/mobileHerobg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .heroText {
      visibility: hidden;
    }
    .title {
      font-size: 50px;
      text-align: center;
      width: 100%;
    }
    .text {
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (max-width: 575px) {
    .heroImage {
      width: 100%;
      height: auto;
      top: 0;
      transform: translateY(0%) translateX(50%);
    }
  }
  @media only screen and (max-width: 400px) {
    .button {
      font-size: 18px;
    }
  }
`;
const HeroSection = () => {
  return (
    <Wrapper style={{overflowX:'hidden'}}>
      <img src="./images/hero.png" alt="#" className="heroImage" />
      <Col xs={11} className="mx-auto myWrapper">
        <div className="heroText ">
          <h2 className="title">
            Empowering investors across the full spectrum of investable digital
            and real-world assets
          </h2>
          <div className="text">
            Sintryx provides full exertion of state-of-the-art approaches for an
            almost <br /> infinite amount of, and ever changing, supply and
            demand infrastructure, <br /> while simultaneously incrementally
            rewarding participants.{" "}
          </div>
          <div className="d-flex  align-items-center ">
            <a
              href="#/"
              className="button read-docs d-flex align-items-center justify-content-center"
            >
              <span> <a href="./docs/onepager.pdf" target="_blank" style={{color:"black"}}>READ DOCS</a></span>
              <BsArrowRightShort className="mt-1" />
            </a>
            <a
              href="#/"
              className="button d-flex align-items-center justify-content-center active"
            >
              <span> OPEN APP</span>
              <BsArrowRightShort className="mt-1" />
            </a>
          </div>
        </div>
      </Col>

      <div className="myHeroText d-md-none">
        <h2 className="title">
          Empowering investors across the full spectrum of investable digital
          and real-world assets
        </h2>
        <div className="text">
          Sintryx provides full exertion of state-of-the-art approaches for an
          almost <br /> infinite amount of, and ever changing, supply and demand
          infrastructure, <br /> while simultaneously incrementally rewarding
          participants.{" "}
        </div>
        <div className="d-flex align-items-center justify-content-center justify-content-md-start  ">
          <a
            href="#/"
            className="button read-docs d-flex align-items-center justify-content-center"
          >
            <span> READ DOCS</span>
            <BsArrowRightShort className="mt-1" />
          </a>
          <a
            href="#/"
            className="button d-flex align-items-center justify-content-center active"
          >
            <span> OPEN APP</span>
            <BsArrowRightShort className="mt-1" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
export default HeroSection;
