import { FaEye, FaRegClipboard, FaCheckCircle } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./challengeCard.css";
import Tooltip from "../tooltip/Tooltip";
import { motion, AnimatePresence } from "framer-motion";

function ChallengeCard({ challenge, index, onClick }) {
  return (
    <motion.a
      className="challenge-card"
      href={challenge.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onClick(challenge.title)}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0.8 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{
        opacity: { delay: index * 0.04, duration: 0.25 },
        y: { delay: index * 0.04, duration: 0.25 },
        layout: { duration: 0.3 },
      }}
    >
      <div className="challenge-card-header">
        <span className="challenge-card-title">{challenge.title}</span>
        <FaArrowUpRightFromSquare
          className="challenge-card-icon"
          fontSize={11}
        />
      </div>
      <div className="challenge-card-stats">
        <Tooltip text={"Total Views"}>
          <div className="challenge-stat">
            <FaEye className="stat-icon" />
            <span>23</span>
          </div>
        </Tooltip>

        <Tooltip text={"Attempted By"}>
          <div className="challenge-stat">
            <FaRegClipboard className="stat-icon" />
            <span>23</span>
          </div>
        </Tooltip>
        <Tooltip text={"Submitted By"}>
          <div className="challenge-stat">
            <FaCheckCircle className="stat-icon" />
            <span>23</span>
          </div>
        </Tooltip>
      </div>
    </motion.a>
  );
}

export default ChallengeCard;
