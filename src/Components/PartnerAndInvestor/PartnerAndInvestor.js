import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 90px 0;
  background: #000000;
  .title {
    font-family: "DarkerGrotesque-Bold";
    font-style: normal;
    font-size: 58px;
    line-height: 100%;
    color: #ffffff;
  }
  .image {
    width: 130px;
  }
  .skyblue {
    width: 160px;
  }
  @media only screen and (max-width: 1199px) {
    .image {
      width: 100px;
    }
    .skyblue {
      width: 130px;
    }
  }
  @media only screen and (max-width: 991px) {
    .title {
      text-align: center;
    }
  }
  @media only screen and (max-width: 767px) {
    .image {
      width: 80px;
    }
    .skyblue {
      width: 130px;
    }
  }
`;
const PartnerAndInvestor = () => {
  const data = [
    { img: "./images/hodl.svg", to: "" },
    { img: "./images/h.png", to: "" },
    { img: "./images/skynet.png", to: "" },
    { img: "./images/w.png", to: "" },
    { img: "./images/circle.png", to: "" },
  ];
  return (
    <Wrapper id="community">
      <Col xs={11} md={10} lg={11} className="mx-auto">
        <Col xs={10} className="mx-auto">
          {" "}
          <h2 className="title pb-3">Partners and Investors</h2>
        </Col>
        <Row className="d-flex justify-content-center justify-content-sm-start justify-content-lg-center pt-5">
          {data.map((el, i) => (
            <Col
              xs={6}
              sm={4}
              md={3}
              lg={2}
              key={i}
              className="d-flex justify-content-center justify-content-lg-start align-items-center mt-5 pt-4"
            >
              <a href={el.to}>
                <img
                  src={el.img}
                  alt="#"
                  className={`image ${i === 2 && "skyblue"}`}
                />
              </a>
            </Col>
          ))}
        </Row>
      </Col>
    </Wrapper>
  );
};
export default PartnerAndInvestor;
