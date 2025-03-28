import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";

import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-4W4BG1Q8CZ");
    ReactGA.send("pageview");
  }, []);
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;
