import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
const Wrapper = styled.div`
  padding: 90px 0;
  padding-bottom: 40px;
  .arrowContainer {
    background: #000;

    padding: 15px 15px;
    margin-left: 12px;
  }
  .arrow {
    color: #fff;
    font-size: 25px;
    font-weight: 700;
  }
  .input {
    border: none;
    outline: none;
    border-bottom: 1px solid #000;
    padding: 4px 0px;
    padding-right: 5px;
    font-family: "DarkerGrotesque-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 100%;
    color: #000000;
    background: none;
  }

  .text {
    font-family: "DarkerGrotesque-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 100%;
    color: #000000;
  }
  .socialContainer {
    padding-top: 120px;
  }
  .icon {
    width: 30px;
    height: 30px;
  }
  @media only screen and (max-width: 400px) {
    .text {
      font-size: 20px;
    }
  }
`;

const Footer = () => {
  const resources = [
    "Onepager",
    "Pitch",
    "Litepaper",
    "Market Report",
    "Terms & Conditions",
    "Privacy Policy",
  ];

  const links = [
    "./docs/onepager.pdf",
    "./docs/pitch.pdf",
    "./docs/litepaper.pdf",
    "./docs/market-report.pdf",
    "./docs/sintryx-website-terms&conditions.pdf",
    "./docs/sintryx-privacy-statement.pdf",
  ]
  const address = [
    "Amstelplein 54, 26th Floor",
    "1096 BC, Amsterdam",
    "The Netherlands",
  ];
  const socialIcon = [
    { icon: "./images/TWITTER.svg", to: "http://twitter.com/sintryxofficial" },
    { icon: "./images/TELEGRAM.svg", to: "https://t.me/SintryxCommunity" },
    { icon: "./images/MEDIUM.svg", to: "https://medium.com/@Sintryx" },
    { icon: "./images/FB.svg", to: "https://m.facebook.com/Sintryx-111331574689872" },
    { icon: "./images/INSTA.svg", to: "https://instagram.com/sintryxofficial?igshid=YmMyMTA2M2Y=" },
  ];
  return (
    <Wrapper>
      <Col xs={10} sm={12} md={9} lg={11} xxl={9} className="mx-auto">
        <Row>
          <Col xl={7}>
            <Row>
              <Col
                sm={5}
                lg={6}
                className="d-flex justify-content-start justify-content-sm-center  justify-md-xl-start"
              >
                <img src="./images/logo.png" alt="#" className="logo" />
              </Col>
              <Col
                sm={7}
                lg={6}
                className="pt-5 pt-sm-0 d-flex   justify-content-sm-start"
              >
                <div className="inputContainer d-flex align-items-center ">
                  <div>
                    <p className="text">Get Our Update</p>
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="arrowContainer">
                    <BsArrowRight className="arrow" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={5} className="pt-5 pt-xl-0">
            <Row>
              <Col
                sm={5}
                lg={6}
                className="d-flex justify-content-start justify-content-sm-center justify-xl-start"
              >
                <div>
                  <p className="text pb-3">Resources</p>
                  {resources.map((el, i) => (
                    <p className="text py-1" key={i}>
                      <a href={links[i]} target="_blank" style={{color:"black"}}> {el} </a>
                    </p>
                  ))}
                </div>
              </Col>
              <Col sm={7} lg={6} className=" pt-sm-0 d-flex ">
                <div>
                  <p className="text pb-3">Find Us</p>
                  {address.map((el, i) => (
                    <p className="text py-1" key={i}>
                      {el}
                    </p>
                  ))}
                  <p className="text pt-3 py-1">info@sintryx.com</p>
                  <p className="text py-1">+31 (0)208546351</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>{" "}
      <div className="socialContainer d-flex justify-content-center align-items-center">
        {socialIcon.map((el, i) => (
          <a
            href={el.to}
            key={i}
            target="_blank"
            rel="noreferrer"
            className="mx-3"
          >
            <img src={el.icon} alt="#" className="icon" />
          </a>
        ))}
      </div>
    </Wrapper>
  );
};
export default Footer;
