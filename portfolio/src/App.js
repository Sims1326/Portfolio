import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/Navbar";
import GameLibraryCard from "./Components/Cards";
import { Container, Col, Row } from "react-bootstrap";
import BioText from "./Components/Bio";
import Footer from "./Components/footer";

function App() {
  return (
   
    <>
      <NavbarComponent/>
    <Row>
    <BioText/>
    <Col><GameLibraryCard appName="Game Library" tech="Javascript"/></Col>
    <Col><GameLibraryCard appName="Credit Credit" tech="Python, SQL"/></Col>
    <Col><GameLibraryCard appName="Revelry" tech="Some C lnaguage"/></Col>
    </Row>
    <Footer/>
    </>
    );
}

export default App;
