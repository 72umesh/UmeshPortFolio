import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

function AnimatedCollapse({ isOpen, children, className }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={className}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          layout
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default AnimatedCollapse;