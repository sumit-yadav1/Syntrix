import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

const Wrapper = styled.div`
  padding: 90px 0;
  padding-bottom: 40px;
  .arrowContainer {
    background: #000;
    padding: 15px 15px;
    margin-left: auto;
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
    width: 100%;
  }

  .inputContainer {
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
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .icon {
    width: 30px;
    height: 30px;
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
  ];
  const address = [
    "Amstelplein 54, 26th Floor",
    "1096 BC, Amsterdam",
    "The Netherlands",
  ];

  const platform = [
    "Platform",
    "Technology",
    "Market Consensus",
    "System",
    "Licenses Liquidity Pool",
    "Token Utility",
    "Fee Distribution",
  ];
  const socialIcon = [
    { icon: "./images/TWITTER.svg", to: "http://twitter.com/sintryxofficial" },
    { icon: "./images/TELEGRAM.svg", to: "https://t.me/SintryxCommunity" },
    { icon: "./images/MEDIUM.svg", to: "https://medium.com/@Sintryx" },
    {
      icon: "./images/FB.svg",
      to: "https://m.facebook.com/Sintryx-111331574689872",
    },
    {
      icon: "./images/INSTA.svg",
      to: "https://instagram.com/sintryxofficial?igshid=YmMyMTA2M2Y=",
    },
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
                <div>
                  {platform.map((el, i) => (
                    <p className="text py-1" key={i}>
                      {el}
                    </p>
                  ))}
                </div>
              </Col>
              <Col
                sm={7}
                lg={6}
                className="pt-5 pt-sm-0 d-flex   justify-content-sm-start"
              >
                <div>
                  <div className="inputContainer d-flex align-items-center ">
                    <div style={{ width: "70%" }}>
                      <p style={{fontWeight:800}}className="text">Get Our Updates</p>
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
                  <a
                    href="#/"
                    className="button read-docs d-flex align-items-center justify-content-center"
                  >
                    <span>
                      {" "}
                      <a
                        href="./docs/onepager.pdf"
                        target="_blank"
                        style={{ color: "black" }}
                        rel="noreferrer"
                      >
                        OPEN PORTAL
                      </a>
                    </span>
                    <BsArrowRightShort className="mt-1" />
                  </a>
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
                  {resources.map((el, i) => (
                    <p className="text py-1" key={i}>
                      <a
                        href={links[i]}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "black" }}
                      >
                        {" "}
                        {el}{" "}
                      </a>
                    </p>
                  ))}
                </div>
              </Col>
              <Col sm={7} lg={6} className=" pt-sm-0 d-flex ">
                <div>
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
    </Wrapper>
  );
};
export default Footer;
