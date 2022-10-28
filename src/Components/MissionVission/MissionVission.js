import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MySwitch from "../SwitchButton/SwitchButton";
const Wrapper = styled.div`
  padding: 45px 0;
  .wrapper {
    background: #fff;
    border: 1px solid #000000;
    padding: 24px;
    border-radius: 8px;
    height: 100%;
  }
  .header {
    font-family: "DarkerGrotesque-Medium";
    font-style: normal;
    color: rgba(0, 0, 0, 0.6);
    font-size: 40px;
    padding-bottom: 4%;
  }
  .myActive {
    color: #000;
  }
  .title {
    font-family: "DarkerGrotesque-Bold";
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 100%;
    color: #000000;
  }
  .image {
    width: 60%;
  }
  .text {
  }
  @media only screen and (max-width: 1199px) {
    .image {
      width: 75%;
    }
  }
  @media only screen and (max-width: 991px) {
    .title {
      font-size: 55px;
    }
    .image {
      width: 90%;
    }
  }
  @media only screen and (max-width: 400px) {
    .header {
      font-family: "DarkerGrotesque-Medium";

      font-size: 35px;
      padding-bottom: 4%;
    }
  }
`;
const MissionVission = () => {
  const [mission, setMission] = useState(true);
  const data = [
    {
      title: "Our Mission",
      text: "Unceasingly empower Investors to maximize their success and minimize their risk through channeling of investment intelligence. We enable Investors to spread capital wisely and educate to optimize economic benefit. We aim to be the Earth’s most Investor centric company connecting various actors in the multilayered Digital and Real World market.",
      image: "./images/MISSION.svg",
      image2: "./images/missionMobile.svg",
    },
    {
      title: "Our Vision",
      text: "Sintryx aims to lower the barrier for market participation, while simultaneously increasing the spread of capital across the full spectrum of Digital and Real World assets. Enabling transparent, cost-effective, private and trusted investment strategy implementations that allow investors to tap into a $200+ trillion market size with confidence of asset control.",
      image: "./images/VISION.svg",
      image2: "./images/vissionmobile.svg",
    },
  ];
  return (
    <Wrapper>
      <Col xs={11} md={10} xxl={9} className="mx-auto">
        <div className="d-flex justify-content-between align-items-center d-md-none">
          <h2 className={`header ${mission && "myActive"}`}>Mission</h2>
          <MySwitch active={mission} setActive={setMission} />
          <h2 className={`header ${!mission && "myActive"}`}>Vission</h2>
        </div>
        <Row className="d-none d-md-flex">
          {data.map((el, i) => (
            <Col sm={8} md={6} key={i} className="mx-auto mt-5 mt-md-0">
              <div className="wrapper">
                <h2 className="title d-none d-md-block">{el.title}</h2>
                <p className="text py-4">{el.text}</p>
                <div className="d-flex justify-content-center">
                  <img src={el.image} alt="#" className="image" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="d-flex d-md-none">
          {(mission ? data.slice(0, 1) : data.slice(-1)).map((el, i) => (
            <Col sm={8} md={6} key={i} className="mx-auto mt-5 mt-md-0">
              <div className="wrapper">
                <h2 className="title d-none d-md-block">{el.title}</h2>
                <p className="text py-4">{el.text}</p>
                <div className="d-flex justify-content-center">
                  <img
                    src={el.image}
                    alt="#"
                    className="image d-none d-md-block"
                  />
                  <img src={el.image2} alt="#" className="image d-md-none" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Wrapper>
  );
};
export default MissionVission;
