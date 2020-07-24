import React, { useState, useEffect } from "react";
import { Image2 } from "./Image2";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {motion} from 'framer-motion'
const useStyles = makeStyles({
  root: {
    margin: "auto",
    position: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
  },
  div1: {
    width: 550,
    marginTop: 50,
  },
  div2: {
    marginTop: 50,
  },
  typo1: {
    marginTop: 50,
    fontSize: 34,
    fontWeight: 100,
    textTransform: "uppercase",
  },
  typo2: {
    fontSize: 44,
    fontWeight: 400,
    textTransform: "uppercase",
  },
  typo3: {
    marginTop: 30,
    fontWeight: 100,
    lineHeight: 1.5,
  },
});

export const Screen2 = () => {
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

  return (
    <div className={classes.root}>
      <motion.div
        animate={{ x: showActions ? -30 : 100 }}
        whileHover={{ scale: 1.1 }}
        transition={{ ease: ["easeOut", "easeIn"], duration: 1 }}
        className={classes.div1}
      >
        <Typography className={classes.typo1}>we are providing you</Typography>
        <Typography className={classes.typo2}>best remote services</Typography>
        <Typography variant="body2" className={classes.typo3}>
          Many startups face worldwide supply and demand challenges in
          recruiting talented and reliable technology engineers. We provide you
          remote working environments. Our professionals sitting at the
          different parts of the world will serve you.
        </Typography>
      </motion.div>
      <div>
        <Image2 />
      </div>
    </div>
  );
};
