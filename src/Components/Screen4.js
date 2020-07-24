import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import animationData from "./Loties/drawkit-grape-animation-9-LOOP.json";
import {Typography} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    height: 600,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  typo: {
    width: 550,
    // border: 'solid',
    textTransform: 'uppercase',
    fontWeight: 100,
    fontSize: 44
  },
});

export const Screen4 = () => {
  const classes = useStyles();

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
      <div>
          <Typography className={classes.typo}> So take your seat and let us do the rest. </Typography>
      </div>
      <div>
        <Lottie options={defaultOptions} height={500} width={500}/>
      </div>
    </div>
  );
};
