import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

import "./MacFrame.css";
const lines = [
  "> git clone umesh-portfolio",
  "> cd umesh-portfolio",
  "> npm start",
  "Welcome to Umesh's Portfolio!",
];

const colors = [
  "#FF6F61",
  "#6B5B95",
  "#88B04B",
  "#F7CAC9",
  "#92A8D1",
  "#955251",
  "#B565A7",
  "#009B77",
];

function MacFrame() {
  const [activeTab, setActiveTab] = useState("terminal");
  const [bgColor, setBgColor] = useState(colors[0]);

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  function handleRandomColor() {
    const random = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(random);
  }
  useEffect(() => {
    if (lineIndex >= lines.length) return; // done

    const interval = setInterval(() => {
      const line = lines[lineIndex];

      // Still typing current line
      if (charIndex < line.length) {
        setCurrentLine((prev) => prev + line[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // Line completed
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }
    }, 60); // typing speed

    return () => clearInterval(interval);
  }, [charIndex, lineIndex]);
  return (
    <div className="macFrame" style={{ backgroundColor: bgColor }}>
      <div className="mac-header">
        <div className="mac-dots">
          <span className="mac-btn red"></span>
          <span className="mac-btn yellow"></span>
          <span className="mac-btn green"></span>
        </div>

        <div className="mac-tabs">
          {["terminal", "color.html", "about.js"].map((tab) => (
            <button
              key={tab}
              className={`mac-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="widget-content">
        {activeTab === "terminal" && (
          <div className="terminal-tab">
            <div
              style={{
                color: "#000",
                fontFamily: "monospace",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              {/* Already typed lines */}
              {displayedLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}

              {/* The line currently being typed */}
              {lineIndex < lines.length && (
                <div>
                  {currentLine}
                  <span className="blink">|</span>
                </div>
              )}

              <style>{`
        .blink {
          animation: blink-animation 1s steps(2, start) infinite;
        }
        @keyframes blink-animation {
          to {
            visibility: hidden;
          }
        }
      `}</style>
            </div>
          </div>
        )}

        {activeTab === "color.html" && (
          <div className="color-tab">
            <p>Select a theme color</p>
            <div className="color-options">
              {colors.map((color) => (
                <div
                  key={color}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                  onClick={() => setBgColor(color)}
                ></div>
              ))}
              <button className="random-color-btn" onClick={handleRandomColor}>
                Random
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default MacFrame;
