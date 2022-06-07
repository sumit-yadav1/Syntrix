import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

const Wrapper = styled.div`
  .main {
    border: 1px solid #000000;
    padding: 24px;
    border-radius: 10px;
  }
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
    font-size: 20px;
    line-height: 100%;
    color: #000000;
    width: 80%;
  }

  .slick-dots {
    bottom: -60px;
  }
  .slick-dots li button::before {
    font-size: 16px;
    color: transparent;
    opacity: 1;
    border: 1px solid black;
    border-radius: 50%;
    display: inline-block;
    background: white;
  }
  .slick-dots li.slick-active button::before {
    color: #000;
    opacity: 1;
    font-size: 16px;
    color: transparent;
    border-radius: 50%;
    border: 4px solid black;
    background: black;
  }
  .slick-arrow::before {
    display: none;
  }
  .slick-next {
    right: -11%;
  }
  .slick-prev {
    left: -11%;
  }
  .iconContainer {
    width: 45px;
    height: 45px;
    background: #000;
  }
  .icon {
    color: #fff;
    font-size: 45px;
  }
  @media only screen and (max-width: 1399px) {
    .slick-next {
      right: -100px;
    }
    .slick-prev {
      left: -100px;
    }
  }
  @media only screen and (max-width: 991px) {
    .image {
      width: 100%;
    }
    .slick-next {
      right: -80px;
    }
    .slick-prev {
      left: -80px;
    }
  }
  @media only screen and (max-width: 767px) {
    .main {
      background: #fff;
    }
    .title {
      text-align: center;
    }
    .text {
      width: 100%;
    }
    .slick-next {
      right: -24px;
      top: -80px;
    }
    .slick-prev {
      top: -80px;
      left: -24px;
    }
  }
  @media only screen and (max-width: 520px) {
    .title {
      font-size: 40px;
    }
    .iconContainer {
      width: 35px;
      height: 35px;
      border: 1px solid #000;
      background: none;
    }
    .icon {
      color: #000;
      font-size: 35px;
    }
    .iconContainer {
      width: 25px;
      height: 25px;
      border: 1px solid #000;
      background: none;
    }
    .icon {
      color: #000;
      font-size: 25px;
    }
    .slick-next {
      top: -72px;
    }
    .slick-prev {
      top: -72px;
    }
  }
  @media only screen and (max-width: 400px) {
    .title {
      font-size: 38px;
    }
    .iconContainer {
      width: 25px;
      height: 25px;
      border: 1px solid #000;
      background: none;
    }
    .icon {
      color: #000;
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 360px) {
    .slick-next {
      right: -30px;
    }
    .slick-prev {
      left: -30px;
    }
  }
`;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} iconContainer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsArrowRightShort className="icon" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} iconContainer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsArrowLeftShort className="icon" />
    </div>
  );
}
const SyntrisPlatform = () => {
  const data = [
    {
      text: "Our unique approach is characterized by two components: a consensus mechanism and an allocation algorithm. Once the threshold is reached after enough votes, consensus is reached for the project to be financed by the market. Depending on the amount of Sintryx tokens that investors keep in their non-custodial wallet, fees will be lower and rewards higher. Control of the investment lies with the investor and is supported by the Sintryx ecosystem.",
      list: [],
      image: "./images/Technology.svg",
    },
    {
      text: "The importance of Custodians",
      list: [],
      image: "./images/LicensedLiquidityPool.svg",
    },
    {
      text: "The Sintryx Platform has a decentralized approach for approving listing applications on the Marketplace. Owners are bound to receive funding from Investors through a reflective pre-voting initiation in exchange for rendering automatic listing exposure enacted through 2% allocation of the total investment users elect to invest in pre-listed Items or Tools. When the listing specific threshold of pre-votes through allocation of Sintryx tokens has been reached Owners can petition to receive funding for the offered Item or Tool. In return, Investors are able to invest the remaining 98% in the pre-voted listing. The clear advantage of Sintryx’s Market Consensus System is that the market and the listing have a direct relationship that dynamically reflects supply and demand. ",
      list: [],

      image: "./images/MarketConsensusSystem.svg",
    },
    {
      text: "",
      list: [
        "Decentralized Exchange",
        "NFT Marketplace ",
        "Custodial Licensed Liquidity Pools ",
        "Venture Capital & Real Estate Investments ",
        "Fractionalised yields",
      ],
      image: "./images/FeeDistribution.svg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Wrapper className="py-5" id="team" data-aos="fade-up">
      <Col xs={11} md={10} xxl={9} className="mx-auto">
        <h2 className="title py-5 pb-4">Sintryx Platform</h2>
        <div className="main">
          <Slider {...settings}>
            {data.map((el, i) => (
              <Row className="d-flex align-items-center" key={i}>
                <Col md={7} className=" mx-auto">
                  <p className="text">{el.text}</p>
                  <ul className=" text list-container py-4">
                    {el.list.map((element, i) => (
                      <li key={i}> {element}</li>
                    ))}
                  </ul>
                  <div className="d-md-flex align-items-center d-none "></div>
                </Col>
                <Col
                  sm={8}
                  md={5}
                  className="d-flex flex-column flex-md-row justify-content-md-end mx-auto mt-5 mt-md-0"
                >
                  <img src={el.image} alt="#" className="image" />
                  <div className="d-flex flex-column align-items-start d-md-none">
                    <img src={el.bottomImage} alt="#" />
                    <p className="text px-3">{el.bottomText}</p>
                  </div>
                </Col>
              </Row>
            ))}
          </Slider>
        </div>
      </Col>
    </Wrapper>
  );
};
export default SyntrisPlatform;
