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
      text: "Sintryx  is the world’s first Solana based CeDeFi platform that decreases the  distance between market participants and simultaneously brings liquidity to the secondary trading for traditional cryptocurrencies, STOs, and fractionalised  shares in metaverse/NFT assets, venture capital and real estate. ",
      list: [
        "Decentralized Exchange",
        "NFT Marketplace ",
        "Custodial Licensed Liquidity Pools ",
        "Venture Capital & Real Estate Investments ",
        "Fractionalised yields",
      ],
      bottomImage: "./images/tryx.png",
      bottomText:
        "Our native token $TRYX will be launched for LP-rewards, multichain fractionalised investment opportunities, and secondary market trading on various exchanges strengthening market participation.",
      image: "./images/platform.png",
    },
    {
      text: "Sintryx  is the world’s first Solana based CeDeFi platform that decreases the  distance between market participants and simultaneously brings liquidity to the secondary trading for traditional cryptocurrencies, STOs, and fractionalised  shares in metaverse/NFT assets, venture capital and real estate. ",
      list: [
        "Decentralized Exchange",
        "NFT Marketplace ",
        "Custodial Licensed Liquidity Pools ",
        "Venture Capital & Real Estate Investments ",
        "Fractionalised yields",
      ],
      bottomImage: "./images/tryx.png",
      bottomText:
        "Our native token $TRYX will be launched for LP-rewards, multichain fractionalised investment opportunities, and secondary market trading on various exchanges strengthening market participation.",
      image: "./images/platform.png",
    },
    {
      text: "Sintryx  is the world’s first Solana based CeDeFi platform that decreases the  distance between market participants and simultaneously brings liquidity to the secondary trading for traditional cryptocurrencies, STOs, and fractionalised  shares in metaverse/NFT assets, venture capital and real estate. ",
      list: [
        "Decentralized Exchange",
        "NFT Marketplace ",
        "Custodial Licensed Liquidity Pools ",
        "Venture Capital & Real Estate Investments ",
        "Fractionalised yields",
      ],
      bottomImage: "./images/tryx.png",
      bottomText:
        "Our native token $TRYX will be launched for LP-rewards, multichain fractionalised investment opportunities, and secondary market trading on various exchanges strengthening market participation.",
      image: "./images/platform.png",
    },
    {
      text: "Sintryx  is the world’s first Solana based CeDeFi platform that decreases the  distance between market participants and simultaneously brings liquidity to the secondary trading for traditional cryptocurrencies, STOs, and fractionalised  shares in metaverse/NFT assets, venture capital and real estate. ",
      list: [
        "Decentralized Exchange",
        "NFT Marketplace ",
        "Custodial Licensed Liquidity Pools ",
        "Venture Capital & Real Estate Investments ",
        "Fractionalised yields",
      ],
      bottomImage: "./images/tryx.png",
      bottomText:
        "Our native token $TRYX will be launched for LP-rewards, multichain fractionalised investment opportunities, and secondary market trading on various exchanges strengthening market participation.",
      image: "./images/platform.png",
    },
    {
      text: "Sintryx  is the world’s first Solana based CeDeFi platform that decreases the  distance between market participants and simultaneously brings liquidity to the secondary trading for traditional cryptocurrencies, STOs, and fractionalised  shares in metaverse/NFT assets, venture capital and real estate. ",
      list: [
        "Decentralized Exchange",
        "NFT Marketplace ",
        "Custodial Licensed Liquidity Pools ",
        "Venture Capital & Real Estate Investments ",
        "Fractionalised yields",
      ],
      bottomImage: "./images/tryx.png",
      bottomText:
        "Our native token $TRYX will be launched for LP-rewards, multichain fractionalised investment opportunities, and secondary market trading on various exchanges strengthening market participation.",
      image: "./images/platform.png",
    },
    {
      text: "Sintryx  is the world’s first Solana based CeDeFi platform that decreases the  distance between market participants and simultaneously brings liquidity to the secondary trading for traditional cryptocurrencies, STOs, and fractionalised  shares in metaverse/NFT assets, venture capital and real estate. ",
      list: [
        "Decentralized Exchange",
        "NFT Marketplace ",
        "Custodial Licensed Liquidity Pools ",
        "Venture Capital & Real Estate Investments ",
        "Fractionalised yields",
      ],
      bottomImage: "./images/tryx.png",
      bottomText:
        "Our native token $TRYX will be launched for LP-rewards, multichain fractionalised investment opportunities, and secondary market trading on various exchanges strengthening market participation.",
      image: "./images/platform.png",
    },
    {
      text: "Sintryx  is the world’s first Solana based CeDeFi platform that decreases the  distance between market participants and simultaneously brings liquidity to the secondary trading for traditional cryptocurrencies, STOs, and fractionalised  shares in metaverse/NFT assets, venture capital and real estate. ",
      list: [
        "Decentralized Exchange",
        "NFT Marketplace ",
        "Custodial Licensed Liquidity Pools ",
        "Venture Capital & Real Estate Investments ",
        "Fractionalised yields",
      ],
      bottomImage: "./images/tryx.png",
      bottomText:
        "Our native token $TRYX will be launched for LP-rewards, multichain fractionalised investment opportunities, and secondary market trading on various exchanges strengthening market participation.",
      image: "./images/platform.png",
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
                  <div className="d-md-flex align-items-center d-none ">
                    <img src={el.bottomImage} alt="#" />
                    <p className="text px-3">{el.bottomText}</p>
                  </div>
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
