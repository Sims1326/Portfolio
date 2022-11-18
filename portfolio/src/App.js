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
   
    <div>
      <NavbarComponent></NavbarComponent>
    <Row>
    <BioText></BioText>
    <Col><GameLibraryCard appName="Game Library" tech="Javascript"></GameLibraryCard></Col>
    <Col><GameLibraryCard appName="Credit Credit" tech="Python, SQL"></GameLibraryCard></Col>
    <Col><GameLibraryCard appName="Revelry" tech="Some C lnaguage"></GameLibraryCard></Col>
    </Row>
    <Footer></Footer>
    </div>
    );
}

export default App;
