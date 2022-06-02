import "bootstrap/dist/css/bootstrap.min.css";
import Copyright from "./Components/Copyright/Copyright";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import ManageMent from "./Components/Management/Management";
import Marque from "./Components/Marque/Marque";
import MissionVission from "./Components/MissionVission/MissionVission";
import PartnerAndInvestor from "./Components/PartnerAndInvestor/PartnerAndInvestor";
import RoadMap from "./Components/Roadmap/RoadMap";
import SyntrisPlatform from "./Components/SyntrixPlatform/SyntrisPlatform";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import styled from "styled-components";
import Header from "./Components/Header/Header";

const Wrapper = styled.div`
  .wrappers {
    background: url("./images/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
function App() {
  return (
    <Wrapper>
      <Header />
      <div className="wrappers">
        <HeroSection />
        <Marque />
        <SyntrisPlatform />
        <MissionVission />
        <RoadMap />
        <Tokenomics />
        <ManageMent />
        <PartnerAndInvestor />
        <Footer />
      </div>

      <Copyright />
    </Wrapper>
  );
}

export default App;
