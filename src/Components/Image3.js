import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as Image } from "./images/app-user-colour.svg";
import { motion } from "framer-motion";
const useStyles = makeStyles(() => ({
  image: {
    width: 400,
    height: 400,
  },
}));

export const Image3 = () => {
  const classes = useStyles();

  const [showActions, setShowActions ] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(()=>{

    function handleScroll(){
        const yPos = window.scrollY;
        const isScrollingUp = yPos < lastYPos;

        setShowActions(isScrollingUp);
        setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);
    return ()=>{
        window.removeEventListener("scroll", handleScroll, false)
    }
  }, [lastYPos])

  return (
    <div>
      <motion.div
        animate={{ opacity: showActions ? 2 : 0 }, {x: showActions ? -100: 100}}
        whileHover={{ scale: 1.1 }}
        // initial="hidden"
        transition={{ ease: ["easeOut", "easeIn"], duration: 2 }}
      >
        <Image className={classes.image} />
      </motion.div>
    </div>
  );
};
