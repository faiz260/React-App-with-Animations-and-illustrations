import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import animationData from "./Loties/drawkit-grape-animation-9-LOOP.json";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    height: 600,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  typo: {
    width: 550,
    // border: 'solid',
    textTransform: "uppercase",
    fontWeight: 100,
    fontSize: 44,
  },
});

export const Screen4 = () => {
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
    <div className={classes.root}>
      <motion.div
        animate={{ x: showActions ? -30 : 100 }}
        whileHover={{ scale: 1.1 }}
        transition={{ ease: ["easeOut", "easeIn"], duration: 1 }}
      >
        <Typography className={classes.typo}>
          {" "}
          So take your seat and let us do the rest.{" "}
        </Typography>
      </motion.div>
      <div>
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
    </div>
  );
};
