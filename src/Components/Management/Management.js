import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MySwitch from "../SwitchButton/SwitchButton";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
const Wrapper = styled.div`
  padding: 90px 0;
  padding-top: 0;
  .wrapper {
    border: 1px solid #000;
    border-radius: 8px;
    padding: 20px 0px;
    height: 100%;
  }
  .image {
    width: 180px;
    border-radius: 100%;
  }
  .title {
    font-family: "DarkerGrotesque-Bold";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 120%;
    color: rgba(0, 0, 0, 0.3);
  }
  .active {
    color: #000;
  }
  .text {
    font-family: "DarkerGrotesque-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    color: #000000;
    text-align: center;
  }
  .slick-dots {
    bottom: -40px;
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
    right: -7%;
  }
  .slick-prev {
    left: -7%;
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
      right: -80px;
    }
    .slick-prev {
      left: -80px;
    }
  }
  @media only screen and (max-width: 1199px) {
    .text {
      font-size: 25px;
    }
    .slick-next {
      right: -60px;
    }
    .slick-prev {
      left: -60px;
    }
  }
  @media only screen and (max-width: 991px) {
    .text {
      font-size: 20px;
    }
    .slick-next {
      right: -60px;
    }
    .slick-prev {
      left: -60px;
    }
  }
  @media only screen and (max-width: 767px) {
    .main {
      padding: 0 40px !important;
    }
    .slick-next {
      top: 120%;
      right: 8px;
    }
    .slick-prev {
      top: 120%;
      left: 88%;
    }
    .iconContainer {
      width: 25px;
      height: 25px;
      background: none;
      border: 1px solid #000;
    }
    .icon {
      font-size: 25px;
      color: #000;
    }
    .image {
      width: 100px;
    }
  }
  @media only screen and (max-width: 575px) {
    .title {
      font-size: 40px;
    }
    .slick-prev {
      top: 120%;
      left: 85%;
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
  }
  @media only screen and (max-width: 460px) {
    .slick-prev {
      top: 120%;
      left: 82%;
    }
  }
  @media only screen and (max-width: 400px) {
    .iconContainer {
      width: 25px;
      height: 25px;
      border: 1px solid #000;
      background: none;
    }
    .slick-prev {
      top: 120%;
      left: 79%;
    }
    .icon {
      color: #000;
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 360px) {
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
const ManageMent = () => {
  const [management, setManageMent] = useState(true);
  const managementArray = [
    {
      image: "./images/CHRISTIAAN.png",
      name: "Christiaan Kok",
      position: "CEO",
    },
    {
      image: "./images/David.svg",
      name: "David Meurs",
      position: "Designer",
    },
    {
      image: "./images/Aditya.svg",
      name: "Aditya",
      position: "Head of Investments",
    },
    {
      image: "./images/Mona.svg",
      name: "Mona",
      position: "Project Coordinator",
    },
    {
      image: "./images/Adam.png",
      name: "Adam",
      position: "QA Lead",
    },
    {
      image: "./images/Victor.svg",
      name: "Victor",
      position: "Lead Developer",
    },
    {
      image: "./images/Alan.svg",
      name: "Alan",
      position: "Lead Developer",
    },
    {
      image: "./images/Priya.svg",
      name: "Priya",
      position: "Lead Developer",
    },
    {
      image: "./images/Brian.svg ",
      name: "Brian",
      position: "Lead UI/UX Designer",
    },
    {
      image: "./images/Maaz.svg",
      name: "Maaz",
      position: "Sr. Software Developer",
    },
    {
      image: "./images/Harry.jpg",
      name: "Harry",
      position: "Sr. Software Developer",
    },
    {
      image: "./images/Sam.svg",
      name: "Sam",
      position: "Sr. UI/UX Designer",
    },
    {
      image: "./images/Chris.svg",
      name: "Chris",
      position: "Sr. Software Developer",
    },
    {
      image: "./images/BenPowell.svg",
      name: "Ben Powell",
      position: "Sr. Software Tester",
    },
  ];
  const advisorArray = [
    {
      image: "./images/JESS_MUNTENAAR.svg",
      name: "Jess Muntenaar",
      position: "Advisor",
    },

    {
      image: "./images/NICK_FRIEDRICH.svg",
      name: "Nick Friedrich",
      position: "Advisor",
    },
    {
      image: "./images/ELLIOT_HAGEMEIJER.svg",
      name: "Elliot Hagemeijer",
      position: "Advisor",
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
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <Col xs={11} md={10} xxl={9} className="mx-auto">
        <div className="d-md-flex align-items-center pb-5 mb-3 pt-3 d-none ">
          <h2 className={`title  pb-3 ${management && "active"}`}>
            Management
          </h2>

          <div className="px-3">
            <MySwitch active={management} setActive={setManageMent} />
          </div>

          <h2 className={`title  pb-3 ${!management && "active"}`}>Advisory</h2>
        </div>
        <div className="d-none d-md-block ">
          <Slider {...settings}>
            {(management ? managementArray : advisorArray).map((el, i) => (
              <Col xs={12} className="px-xxl-4 px-2 " key={i}>
                <div
                  key={i}
                  className="d-flex flex-column justify-content-center align-items-center wrapper"
                >
                  <img src={el.image} alt="#" className="image" />
                  <p className="name text">{el.name}</p>
                  <p className="position text">{el.position}</p>
                </div>
              </Col>
            ))}
          </Slider>
        </div>
        <div className="d-md-none py-5 ">
          <h2 className={`title  pb-3  active`}>Management</h2>
          <Slider {...settings}>
            {managementArray.map((el, i) => (
              <Col xs={12} className="px-xxl-4 px-2 " key={i}>
                <div
                  key={i}
                  className="d-flex flex-column justify-content-center align-items-center wrapper"
                >
                  <img src={el.image} alt="#" className="image" />
                  <p className="name text">{el.name}</p>
                  <p className="position text">{el.position}</p>
                </div>
              </Col>
            ))}
          </Slider>
        </div>
        <div className="d-md-none py-5 ">
          <h2 className={`title  pb-3  active`}>Advisory</h2>
          <Slider {...settings}>
            {advisorArray.map((el, i) => (
              <Col xs={12} className="px-xxl-4 px-2 " key={i}>
                <div
                  key={i}
                  className="d-flex flex-column justify-content-center align-items-center wrapper"
                >
                  <img src={el.image} alt="#" className="image" />
                  <p className="name text">{el.name}</p>
                  <p className="position text">{el.position}</p>
                </div>
              </Col>
            ))}
          </Slider>
        </div>
      </Col>
    </Wrapper>
  );
};
export default ManageMent;
