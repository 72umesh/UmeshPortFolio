import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-4W4BG1Q8CZ");
    ReactGA.send("pageview");
  }, []);
  return (
    <div className="portfolio-container">
      <Header />
      <main className="portfolio-main">
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
