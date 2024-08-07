import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import { Skills } from "./components/Skils";
import { Projects } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
