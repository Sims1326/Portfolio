import logo from "./logo.svg";
import "./App.css";
import "./hero.css";
import "./about.css";
import "./footer.css";
import NavbarComponent from "./Components/Navbar";
import Projects from "./Components/Project";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
