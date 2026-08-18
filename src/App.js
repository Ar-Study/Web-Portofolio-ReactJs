import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import { Skills } from "./components/Skils";
import { Services } from "./components/Services";
import { Projects } from "./components/Project";
import { OrderForm } from "./components/OrderForm";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  const [selectedPackage, setSelectedPackage] = useState("");
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Services
        onChoose={(name) => {
          setSelectedPackage(name);
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <Projects />
      <OrderForm selectedPackage={selectedPackage} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
