import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (blur) => ({
  initial: { filter: blur, scale: 1 },
  hover: {
    filter: "blur(0px)",
    scale: 1.6,
    transition: {
      duration: 0.3, // Duration of the blur effect transition
      ease: "easeOut",
    },
  },
  animate: {
    y: [10, -10],
    rotate: [-20, 70],

    transition: {
      rotate: {
        repeat: Infinity, // Rotate infinitely
        duration: 5, // Duration of one full rotation cycle
        ease: "easeInOut",
        repeatType: "reverse",
      },
      y: {
        duration: 3,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse", // Smooth easing for up and down movement
      },
    },
  },
});

const BlurIcon = ({ logo, color, string, blur }) => {
  const [isHovered, setIsHovered] = useState(false);
  const att = `absolute flex items-center justify-center ${string} w-48 h-48 rounded-full`;
  const borderAtt2 = `absolute  inset-6 border ${color} rounded-full`;
  const borderAtt1 = `absolute  inset-8 border ${color} rounded-full`;
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial="initial"
      whileHover="hover"
      variants={iconVariants(blur)}
      animate="animate"
      className={att}
    >
      <div className="absolute rounded-full bg-white opacity-1">
        <img src={logo} className="h-28 w-28 " />
        {/* <FaEthereum className="text-5xl text-gray-600 m-auto " /> */}
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "linear" }}
        className={borderAtt1}
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.8, ease: "linear" }}
        className={borderAtt2}
      ></motion.div>
    </motion.div>
  );
};

export default BlurIcon;
