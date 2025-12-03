import "./App.css";
import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Project from "./sections/projects/Project";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

import ReactGA from "react-ga4";
import { useEffect } from "react";
import Experience from "./sections/experience/Experience";
import Contribution from "./sections/contribution/Contribution";
import { Analytics } from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-4W4BG1Q8CZ");
    ReactGA.send("pageview");
  }, []);
  return (
    <>
      <div className="portfolio-container">
        <Header />
        <main className="portfolio-main">
          <Home />
          <About />
          <Experience />
          <Contribution />
          <Project />
          <Contact />
          <Footer />
        </main>
      </div>
      <Analytics
        beforeSend={(event) => {
          if (
            typeof window !== "undefined" &&
            localStorage.getItem("ignore-analytics") === "true"
          ) {
            return null;
          }
          return event;
        }}
      />
    </>
  );
}

export default App;
