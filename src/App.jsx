import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";

function App() {
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
