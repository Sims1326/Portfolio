import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/Navbar";
import GameLibraryCard from "./Components/Cards";
import { Col, Row } from "react-bootstrap";
import BioText from "./Components/Bio";
import Footer from "./Components/footer";
const gameLibraryImage = "https://www.fillmurray.com/640/360";
const creditCreditImage = "https://www.placecage.com/640/360";
const revelryImage = "https://www.stevensegallery.com/640/360";

function App() {
  return (
    <div className="bg-dark min-vh-100 min-vw-100 p-2">
      <NavbarComponent />

      <BioText />

      <div className="d-flex gap-5 p-5">
        <GameLibraryCard
          appName="Game Library"
          tech="Javascript"
          appImg={gameLibraryImage}
          imgAlt="Artistic Bill Murray"
        />

        <GameLibraryCard
          appName="Credit Credit"
          tech="Python, SQL"
          appImg={creditCreditImage}
          imgAlt="Nick Cage"
        />

        <GameLibraryCard
          appName="Revelry"
          tech="Some C lnaguage"
          appImg={revelryImage}
          imgAlt="stephen segal"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
