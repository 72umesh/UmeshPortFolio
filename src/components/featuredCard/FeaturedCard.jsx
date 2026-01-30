import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./FeaturedCard.css";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import {trackEvent} from "../../utils/analytics";

export default function FeaturedCard({
  title,
  description,
  icon,
  iconAlt,
  demoVideo, externalLink,
}) {
  const [showVideo, setShowVideo] = useState(false);

  function handleDemoClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setShowVideo(true);
    trackEvent(`featured_swiftflow_demo_video_play`);
  }

  function handleCloseVideo() {
    setShowVideo(false);
    trackEvent(`featured_swiftflow_demo_video_close`);
  }

  function handleViewExtensionClick(e) {
    e.stopPropagation();
    window.open(externalLink, "_blank");
    trackEvent(`featured_swiftflow_chrome_extension_click`);
  }

  return (
    <div className="featured-card">
      <div className="featured-card-icon">
        <img src={icon} alt={iconAlt} loading="lazy" />
      </div>

      <div className="featured-card-content">
        <h3 className="featured-card-title">{title}</h3>
        <p className="featured-card-description">{description}</p>

        <div className="featured-card-actions">
          <button className="featured-btn" onClick={handleDemoClick}>
            <FaArrowUpRightFromSquare />
            View Demo
          </button>
          <button className="featured-btn" onClick={handleViewExtensionClick}>
            <FaArrowUpRightFromSquare />
            View Chrome Extension
          </button>
        </div>
      </div>

      {showVideo && demoVideo && (
        <div className="video-modal-overlay" onClick={handleCloseVideo}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="video-modal-close" onClick={handleCloseVideo}>
              <IoCloseOutline fontSize={24} />
            </button>
            <div className="video-wrapper">
              <video src={demoVideo} controls autoPlay className="demo-video">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
