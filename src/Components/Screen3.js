import React, { useEffect, useState }  from "react";
import {Image3} from "./Image3"
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    position: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 50,
    height: 500,
  },
  typoDiv:{
    marginRight: 200,
    height: 200
  },
  typo1: {
    marginTop: -70,
    textTransform: "uppercase",
    fontWeight: 300
  },
  text1:{
    fontSize: 20,
    marginRight: 10
  },
  text2:{
    fontSize: 50
  },
  typo2:{
    fontSize: 25,
    textAlign: "center",
    fontWeight: 300
  },
  typo3:{
    marginTop: 50,
    width: 500,
    fontWeight: 200
  },

});

export const Screen3 = () => {
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
    <div className={classes.root}>
      <div>
        <Image3/>
      </div>
      <motion.div 
      className={classes.typoDiv}
      animate={{y: showActions ? 100 : -50}}
      whileHover={{ scale: 1.1 }}
      transition={{ ease: ["easeOut", "easeIn"], duration: 1 }}
      >
        <Typography className={classes.typo1}>
          <span className={classes.text1}> our </span> <span className={classes.text2}> mobile apps </span>
        </Typography>
        <Typography className={classes.typo2}>
        will make your day productive.  
        </Typography>
        <Typography variant="body2" className={classes.typo3}>
              Our simple and fast mobile applications willl cater your daily needs, solve your problems and 
              and will make your day productive and easy for you.So grab a coffee and your mobile and Enjoy !!              
        </Typography>
      </motion.div>
    </div>
  );
};
