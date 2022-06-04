import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
const Wrapper = styled.div`
  .title {
    font-family: "DarkerGrotesque-Bold";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 140%;
    color: #000000;
  }
  .header {
    font-family: "DarkerGrotesque-Medium";
    font-style: normal;
    font-weight: ;
    font-size: 40.014px;
    line-height: 140%;
    /* identical to box height */

    color: #000000;
  }
  .text {
    font-family: "DarkerGrotesque-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 100%;
    color: #000000;
    width: 80%;
    padding-bottom: 10px;
    border-bottom: 0.957px solid #000000;
  }
  .slick-dots {
    bottom: -60px;
  }
  .slick-dots li button::before {
    font-size: 8px;
  }
  .slick-dots li.slick-active button::before {
    color: #000;
    opacity: 1;
    font-size: 8px;
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
      right: -70px;
    }
    .slick-prev {
      left: -70px;
    }
  }
  @media only screen and (max-width: 991px) {
    .text {
      font-size: 18px;
    }
    .slick-next {
      right: -40px;
    }
    .slick-prev {
      left: -40px;
    }
  }
  @media only screen and (max-width: 767px) {
    .main {
      padding: 0 40px !important;
    }
    .slick-next {
      right: -35px;
    }
    .slick-prev {
      left: -35px;
    }
    .iconContainer {
      width: 25px;
      height: 25px;
    }
    .icon {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 520px) {
    .header {
      font-size: 30px;
      text-align: center;
    }
    .text {
      width: 100%;
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
      top: 25px;
    }
    .slick-prev {
      top: 25px;
    }
  }
  @media only screen and (max-width: 400px) {
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
const RoadMap = () => {
  const data = [
    {
      title: "Q2 2022",
      list: [
        "Smart contract development",
        "Security evaluation",
        "Finalization of Dashboard Intelligence",
        "Metaverse / NFT Marketplace",
      ],
    },
    {
      title: "Q3 2022",
      list: [
        "Metaverse NFT Gallery",
        "Decentralized Exchange",
        "Marketing Campaign",
        "Launch native Token $TRYX",

      ],
    },
    {
      title: "Q4 2022",
      list: [
        "Audit smart token contracts",
        "Initialization of Venture Investing protocols",
      ],
    },
    {
      title: "Q2 2022",
      list: [
        "Smart contract development",
        "Security evaluation",
        "Finalization of Dashboard Intelligence",
        "Metaverse / NFT Marketplace",
      ],
    },
    {
      title: "Q3 2022",
      list: [
        "Metaverse NFT Gallery",
        "Decentralized Exchange",
        "Marketing Campaign",
        "Launch native Token $TRYX",

      ],
    },
    {
      title: "Q4 2022",
      list: [
        "Audit smart token contracts",
        "Initialization of Venture Investing protocols",
      ],
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Wrapper id="roadmap">
      <Col xs={11} md={10} xxl={9} className="mx-auto">
        <h2 className="title py-5 pb-4">Roadmap</h2>
        <div className="main  px-0">
          <Slider {...settings}>
            {data.map((el, i) => (
              <Col md={4} key={i} className="d-flex justify-content-center">
                <div>
                  <p className="header pb-3">{el.title}</p>
                  <div>
                    {el.list.map((el, i) => (
                      <p className="text mb-2" key={i}>
                        {el}
                      </p>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Slider>
        </div>
      </Col>
    </Wrapper>
  );
};
export default RoadMap;
