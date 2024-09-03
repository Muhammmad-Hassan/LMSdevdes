
import React from 'react'; // Add this import statement
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const RouteWrapper = ({ element }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: "-20vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100vh" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.5, 1] }} // Custom ease for smoother transition
    >
      {element}
    </motion.div>
  );
};

export default RouteWrapper;
