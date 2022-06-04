import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-scroll";
import { VscClose } from "react-icons/vsc";
const Wrapper = styled.div`
  position: fixed;
  padding: 30px 0;
  background: #fff;

  top: 0px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 5000;

  .line-container {
    display: block;
    float: left;
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
    margin-left: 25px;
    font-family: "DarkerGrotesque-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
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
  }
  .dropdown {
    padding: 20px;
    position: absolute;
    z-index: 20000;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    left: 0;

    top: 40px;
    right: 0;
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
const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navArray = [
    { navItem: "RoadMap", to: "roadmap" },
    { navItem: "Community", to: "community" },
  ];

  return (
    <Wrapper style={{borderBottom: 'solid 1px'}}>
      {" "}
      <div className="d-none d-md-block"
      >
        <Col xs={11} className="mx-auto d-flex justify-content-between ">
          <img width="120px" src="./images/SintryxLogoKleur.png" alt="#" />
          <div className="d-flex">
            <div
              className="d-flex drowdownContainer"
              onClick={() => setDropdown((prev) => !prev)}
            >
              <span className="navItem">Docs</span>
              <span>
                <BiChevronDown className="down mt-2" />
              </span>
              {dropdown && (
                <div className="dropdown">
                  <span className="text pt-3"><a href="./docs/litepaper.pdf" target="_blank">LitePaper</a></span>
                  <span className="text pt-3"><a href="./docs/onepager.pdf" target="_blank">OnePager</a></span>
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
        </Col>
      </div>{" "}
      <div className="sidebarContainer">
        {!sidebar && (
          <div className="d-flex d-md-none justify-content-between align-items-center">
            <img width="80px" src="./images/SintryxLogoKleur.png" alt="#" className="mobileLogo" />
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
              className="d-flex drowdownContainer "
              onClick={() => setDropdown((prev) => !prev)}
            >
              <span className="navItem m-0">Docs</span>
              <span>
                <BiChevronDown className="down mt-2" />
              </span>
              {dropdown && (
                <div className="dropdown">
                  <span className="text pt-0">aasdfa</span>
                  <span className="text pt-3">aasdfa</span>
                  <span className="text pt-3">sddddddddd</span>
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
  );
};
export default Header;
