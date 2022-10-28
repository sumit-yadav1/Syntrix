import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-scroll";
import { VscClose } from "react-icons/vsc";
import { Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
const Wrapper = styled.div`
  position: fixed;
  padding: 10px 0;
  background: #fff;
  align-items: center;
  top: 0px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 5000;

  .community-icon {
    width: 16px;
    height: 16px;
    margin-left: auto;
    float: right;
    fill: #2c3c5b;
  }

  .line-container {
    display: block;
    float: left;
  }

  .menu-container {
    display: flex;
    gap: 40px;
    margin-right: 170px;
    @media only screen and (min-width: 1536px) {
      margin-right: 240px;
      gap: 80px;
    }
  }

  .logo {
    margin-right: auto;
  }
  .hamburger .line {
    width: 32px;
    height: 2px;
    background-color: #2c3c5b;
    display: block;
    margin: 7px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .hamburger:hover {
    cursor: pointer;
  }

  .navItem {
    font-family: "DarkerGrotesque-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 1.563rem;
    line-height: 150%;
    color: #2c3c5b;
    cursor: pointer;
  }
  .active {
    font-weight: 600;
    color: #2c3c5b;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .hamburger {
    display: none;
  }
  .sidebarContainer {
    position: relative;
  }
  .sidebar {
    position: fixed;
    width: 100%;
    background: #fff;
    top: 0px;
    left: 0;
    height: 100vh;
    z-index: 50;
    padding-top: 60px;
  }

  .drowdownContainer {
    position: relative;
    align-items: center;
    gap: 4px;
    display: flex;
    .down {
      padding-top: 4px;
      font-size: 1.5rem;
    }
  }

  .drowdownContainerMobile {
    position: relative;
    align-items: center;
    gap: 4px;
    display: flex;
    flex-direction: column;
  }

  .dropdownmobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dropdown {
    position: absolute;
    z-index: 20000;
    background: #fff;
    display: flex;
    flex-direction: column;
    width: 150px;
    left: 0;
    top: 40px;
    right: 0;
  }

  .dropdown span a {
    color: #2c3c5b;
  }

  @media only screen and (max-width: 1199px) {
    .navItem {
      font-size: 24px;
    }
  }
  @media only screen and (max-width: 767px) {
    height: 90px;
    padding: 0;
    .dropdown {
      left: -50px;
      width: 150px;
      padding-top: 10px;
      top: 40px;
    }
    .hamburger {
      display: block;
      position: absolute;
      top: 25px;
      right: 20px;
      font-weight: 600;
      color: #fff;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
    }
    .mobileLogo {
      position: absolute;
      top: 25px;
      left: 20px;
    }
    .close {
      display: block;
      position: absolute;
      top: 25px;
      font-size: 35px;
      right: 20px;
      font-weight: 600;
      color: #2c3c5b;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }
  }
`;

const WrapperMenu = styled(Wrapper)`
  display: block;
  background: black;

  .menu-container {
    display: none;
  }
`;

const ButtonMenu = styled.div`
  display: flex;
  background: black;
  color: white;
  height: 100%;
  position: absolute;
  right: 0;
  align-items: center;
  padding: 0 30px;
  gap: 10px;
  cursor: pointer;
  user-select: none;

  span {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 300;
  }

  svg {
    width: 30px;
    height: 24px;
  }
  @media only screen and (min-width: 1536px) {
    padding: 0 70px;
  }
`;

const ButtonMenuOffset = styled(ButtonMenu)`
  background: white;
  color: black;
  svg {
    width: 30px;
    height: 30px;
  }
`;

const OffsetContainer = styled.div`
  background: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding-top: 100px;
`;

const WrapperFooter = styled.div`
  padding: 90px 0;
  padding-bottom: 40px;
  color: white !important;
  .arrowContainer {
    background: white;
    padding: 15px 15px;
    margin-left: auto;
  }
  .arrow {
    color: black;
    font-size: 25px;
    font-weight: 700;
  }

  .input {
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    padding: 4px 0px;
    padding-right: 5px;
    font-family: "DarkerGrotesque-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 100%;
    color: white;
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
    color: white;
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
    border: 1px solid white;
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

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [menu, setMenu] = useState(false);
  const navArray = [{ navItem: "RoadMap", to: "roadmap" }];

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
    <>
      {!menu ? (
        <Wrapper style={{ borderBottom: "solid 1px" }}>
          <div className="d-none d-md-block">
            <Col
              xs={11}
              className="mx-auto d-flex justify-content-between align-items-center"
            >
              <img
                width="150px"
                src="./images/SintryxLogoKleur.png"
                alt="#"
                className="logo"
              />
              <div className="menu-container">
                <div
                  className="d-flex drowdownContainer align-items-center"
                  onClick={() => setDropdown((prev) => !prev)}
                >
                  <span className="navItem">Docs</span>
                  <span>
                    <BiChevronDown className="down" />
                  </span>
                  {dropdown && (
                    <div className="dropdown">
                      <span className="py-1 px-3 border-bottom">
                        <a
                          href="./docs/litepaper.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          LitePaper
                        </a>
                      </span>
                      <span className=" py-1 px-3 border-bottom">
                        <a
                          href="./docs/onepager.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          OnePager
                        </a>
                      </span>
                    </div>
                  )}
                </div>
                <div
                  className="d-flex drowdownContainer"
                  onClick={() => setDropdown2((prev) => !prev)}
                >
                  <span className="navItem">Community</span>
                  <span>
                    <BiChevronDown className="down" />
                  </span>
                  {dropdown2 && (
                    <div className="dropdown">
                      <span className=" py-1 px-3 border-bottom">
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          className="d-flex align-items-center"
                        >
                          Twitter
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="community-icon"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      </span>
                      <span className=" py-1 px-3 border-bottom">
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          className="d-flex align-items-center"
                        >
                          Telegram
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="community-icon"
                          >
                            <path
                              id="telegram-1"
                              d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                            />
                          </svg>
                        </a>
                      </span>
                      <span className=" py-1 px-3 border-bottom">
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          className="d-flex align-items-center"
                        >
                          Medium
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            className="community-icon"
                          >
                            <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" />
                          </svg>
                        </a>
                      </span>
                      <span className=" py-1 px-3 border-bottom">
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          className="d-flex align-items-center"
                        >
                          Facebook
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="community-icon"
                          >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                          </svg>
                        </a>
                      </span>
                      <span className=" py-1 px-3 border-bottom">
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          className="d-flex align-items-center"
                        >
                          Instagram
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="community-icon"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  )}
                </div>
                {navArray.map((el, i) => (
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    key={i}
                    to={el.to}
                    className="navItem"
                  >
                    {el.navItem}
                  </Link>
                ))}
              </div>

              <ButtonMenu onClick={() => setMenu(!menu)}>
                <span>Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </ButtonMenu>
            </Col>
          </div>
          <div className="sidebarContainer">
            {!sidebar && (
              <div className="d-flex d-md-none justify-content-between align-items-center">
                <img
                  width="80px"
                  src="./images/SintryxLogoKleur.png"
                  alt="#"
                  className="mobileLogo"
                />
                <div
                  className="three line-container "
                  onClick={() => setSidebar(true)}
                >
                  <div className="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          {sidebar && (
            <div
              className={`sidebar   d-flex flex-column align-items-center
          }`}
            >
              {sidebar && (
                <VscClose
                  className="close "
                  onClick={() => {
                    setSidebar(false);
                  }}
                />
              )}{" "}
              <div className="d-flex flex-column align-items-center">
                <div
                  className="drowdownContainerMobile"
                  onClick={() => setDropdown((prev) => !prev)}
                >
                  <div className="d-flex align-items-center">
                    <span className="navItem m-0">Docs</span>
                    <span>
                      <BiChevronDown className="down mt-2" />
                    </span>
                  </div>
                  {dropdown && (
                    <div className="dropdownmobile">
                      <span className="text pt-0">LitePaper</span>
                      <span className="text pt-3">OnePager</span>
                    </div>
                  )}
                </div>
                <div
                  className=" drowdownContainerMobile pt-4"
                  onClick={() => setDropdown2((prev) => !prev)}
                >
                  <div className="d-flex align-items-center">
                    <span className="navItem m-0">Community</span>
                    <span>
                      <BiChevronDown className="down mt-2" />
                    </span>
                  </div>
                  {dropdown2 && (
                    <div className="dropdownmobile">
                      <span className="text pt-0">Twitter</span>
                      <span className="text pt-3">Telegram</span>
                      <span className="text pt-3">Medium</span>
                      <span className="text pt-3">Facebook</span>
                      <span className="text pt-3">Instagram</span>
                    </div>
                  )}
                </div>
                {navArray.map((el, i) => (
                  <Link
                    key={i}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    to={el.to}
                    className="navItem m-0 pt-4"
                    onClick={() => setSidebar(false)}
                  >
                    {el.navItem}
                  </Link>
                ))}{" "}
              </div>
            </div>
          )}
        </Wrapper>
      ) : (
        <OffsetContainer>
          <WrapperMenu>
            <div className="d-none d-md-block">
              <Col
                xs={11}
                className="mx-auto d-flex justify-content-between align-items-center"
              >
                <img
                  width="150px"
                  src="./images/SintryxLogoKleur.png"
                  alt="#"
                  className="logo"
                />
                <div className="menu-container">
                  <div
                    className="d-flex drowdownContainer"
                    onClick={() => setDropdown((prev) => !prev)}
                  >
                    <span className="navItem">Docs</span>
                    <span>
                      <BiChevronDown className="down" />
                    </span>
                    {dropdown && (
                      <div className="dropdown">
                        <span className="py-1 px-3 border-bottom">
                          <a
                            href="./docs/litepaper.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            LitePaper
                          </a>
                        </span>
                        <span className=" py-1 px-3 border-bottom">
                          <a
                            href="./docs/onepager.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            OnePager
                          </a>
                        </span>
                      </div>
                    )}
                  </div>
                  <div
                    className="d-flex drowdownContainer"
                    onClick={() => setDropdown2((prev) => !prev)}
                  >
                    <span className="navItem">Community</span>
                    <span>
                      <BiChevronDown className="down" />
                    </span>
                    {dropdown2 && (
                      <div className="dropdown">
                        <span className=" py-1 px-3 border-bottom">
                          <a href="#" target="_blank" rel="noreferrer">
                            Twitter
                          </a>
                        </span>
                        <span className=" py-1 px-3 border-bottom">
                          <a href="#" target="_blank" rel="noreferrer">
                            Telegram
                          </a>
                        </span>
                        <span className=" py-1 px-3 border-bottom">
                          <a href="#" target="_blank" rel="noreferrer">
                            Medium
                          </a>
                        </span>
                        <span className=" py-1 px-3 border-bottom">
                          <a href="#" target="_blank" rel="noreferrer">
                            Facebook
                          </a>
                        </span>
                        <span className=" py-1 px-3 border-bottom">
                          <a href="#" target="_blank" rel="noreferrer">
                            Instagram
                          </a>
                        </span>
                      </div>
                    )}
                  </div>
                  {navArray.map((el, i) => (
                    <Link
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      key={i}
                      to={el.to}
                      className="navItem"
                    >
                      {el.navItem}
                    </Link>
                  ))}
                </div>

                <ButtonMenuOffset onClick={() => setMenu(!menu)}>
                  <span>Menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </ButtonMenuOffset>
              </Col>
            </div>
            <div className="sidebarContainer">
              {!sidebar && (
                <div className="d-flex d-md-none justify-content-between align-items-center">
                  <img
                    width="80px"
                    src="./images/SintryxLogoKleur.png"
                    alt="#"
                    className="mobileLogo"
                  />
                  <div
                    className="three line-container "
                    onClick={() => setSidebar(true)}
                  >
                    <div className="hamburger">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {sidebar && (
              <div
                className={`sidebar   d-flex flex-column align-items-center
          }`}
              >
                {sidebar && (
                  <VscClose
                    className="close "
                    onClick={() => {
                      setSidebar(false);
                    }}
                  />
                )}{" "}
                <div className="d-flex flex-column align-items-center">
                  <div
                    className="drowdownContainerMobile"
                    onClick={() => setDropdown((prev) => !prev)}
                  >
                    <div className="d-flex align-items-center">
                      <span className="navItem m-0">Docs</span>
                      <span>
                        <BiChevronDown className="down mt-2" />
                      </span>
                    </div>
                    {dropdown && (
                      <div className="dropdownmobile">
                        <span className="text pt-0">LitePaper</span>
                        <span className="text pt-3">OnePager</span>
                      </div>
                    )}
                  </div>
                  <div
                    className=" drowdownContainerMobile pt-4"
                    onClick={() => setDropdown2((prev) => !prev)}
                  >
                    <div className="d-flex align-items-center">
                      <span className="navItem m-0">Community</span>
                      <span>
                        <BiChevronDown className="down mt-2" />
                      </span>
                    </div>
                    {dropdown2 && (
                      <div className="dropdownmobile">
                        <span className="text pt-0">Twitter</span>
                        <span className="text pt-3">Telegram</span>
                        <span className="text pt-3">Medium</span>
                        <span className="text pt-3">Facebook</span>
                        <span className="text pt-3">Instagram</span>
                      </div>
                    )}
                  </div>
                  {navArray.map((el, i) => (
                    <Link
                      key={i}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      to={el.to}
                      className="navItem m-0 pt-4"
                      onClick={() => setSidebar(false)}
                    >
                      {el.navItem}
                    </Link>
                  ))}{" "}
                </div>
              </div>
            )}
          </WrapperMenu>
          <WrapperFooter>
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
                              style={{ color: "white" }}
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
          </WrapperFooter>
        </OffsetContainer>
      )}
    </>
  );
};
export default Header;
