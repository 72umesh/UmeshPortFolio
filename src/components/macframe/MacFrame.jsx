import { useEffect, useState } from "react";

import { personalSettings, lines, colors } from "./macframeData";
import tinycolor from "tinycolor2";
import "./MacFrame.css";

const colorShades = colors.map((color) => ({
  header: tinycolor(color).darken(10).toString(),
  content: tinycolor(color).setAlpha(0.99).toRgbString(),
}));

const Typing_Speed = 60;

function MacFrame() {
  const [activeTab, setActiveTab] = useState("terminal");
  const [bgColor, setBgColor] = useState(colorShades[0]);

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  function handleRandomColor() {
    const random = colorShades[Math.floor(Math.random() * colorShades.length)];
    setBgColor(random);
  }
  const resetTyping = () => {
    setDisplayedLines([]);
    setCurrentLine("");
    setLineIndex(0);
    setCharIndex(0);
    setTypingComplete(false);
  };
  useEffect(() => {
    if (lineIndex >= lines.length) {
      setTypingComplete(true);
      return;
    }

    if (activeTab !== "terminal") {
      return;
    }

    const interval = setInterval(() => {
      const line = lines[lineIndex];

      if (charIndex < line.length) {
        setCurrentLine((prev) => prev + line[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }
    }, Typing_Speed);

    return () => clearInterval(interval);
  }, [charIndex, lineIndex, activeTab]);
  return (
    <div
      className="macFrame"
      style={{
        backgroundColor: bgColor.content,
      }}
    >
      <div className="mac-header" style={{ backgroundColor: bgColor.header }}>
        <div className="mac-dots">
          <span className="mac-btn red"></span>
          <span className="mac-btn yellow"></span>
          <span className="mac-btn green"></span>
        </div>

        <div className="mac-tabs">
          {["terminal", "theme.html", "about.js"].map((tab) => (
            <button
              key={tab}
              className={`mac-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                if (tab === "terminal") {
                  resetTyping();
                }
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="widget-content">
        {activeTab === "terminal" && (
          <div className="terminal-tab">
            {displayedLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            {!typingComplete && (
              <div className="currentLine">
                <span>{currentLine}</span>
                <span className="blink"></span>
              </div>
            )}
          </div>
        )}

        {activeTab === "theme.html" && (
          <div className="color-tab">
            <p>Select a theme color</p>
            <div className="color-options">
              {colorShades.map((color) => (
                <div
                  key={color}
                  className="color-circle"
                  style={{
                    backgroundColor: color.header,
                  }}
                  onClick={() => setBgColor(color)}
                ></div>
              ))}
            </div>
            <button className="random-color-btn" onClick={handleRandomColor}>
              Switch to Random Color
            </button>
          </div>
        )}

        {activeTab === "about.js" && (
          <div className="about-tab">
            <pre>
              {"{\n"}
              {personalSettings.map((item, index) => (
                <div key={index} style={{ marginLeft: "20px" }}>
                  <span className="key">"{item.key}"</span>
                  <span>: </span>
                  <span className="value">
                    {Array.isArray(item.value)
                      ? JSON.stringify(item.value)
                      : JSON.stringify(item.value)}
                  </span>
                  <span>,</span>
                  <br />
                </div>
              ))}
              {"}"}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
export default MacFrame;
