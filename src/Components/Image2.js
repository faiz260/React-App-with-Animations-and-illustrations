import React, { useState, useEffect } from "react";
import animationData from "./Loties/26402-working.json";
import { makeStyles } from "@material-ui/core/styles";
import Lottie from "react-lottie";

const useStyles = makeStyles(() => ({
  image: {
    width: 400,
    height: 400,
  },
}));

export const Image2 = () => {
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
    <div>
      <div className={classes.div2}>
        <Lottie options={defaultOptions} className={classes.image} />
      </div>
    </div>
  );
};
