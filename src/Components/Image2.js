import React, {useState, useEffect} from "react";
import animationData from "./Loties/26402-working.json";
import { makeStyles } from "@material-ui/core/styles";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  image: {
    width: 400,
    height: 400,
  },
}));

export const Image2 = () => {
  const classes = useStyles();

  const [showActions, setShowActions] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <motion.div
        animate={
          ({ opacity: showActions ? 2 : 0 }, { x: showActions ? -100 : 100 },  { y: showActions ? -50 : 100 })}
        whileHover={{ scale: 1.1 }}
        transition={{ ease: ["easeOut", "easeIn"], duration: 2 }}
        className={classes.div2}
      >
        <Lottie options={defaultOptions} className={classes.image} />
      </motion.div>
    </div>
  );
};
