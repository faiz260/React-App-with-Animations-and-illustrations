import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import {Image1} from './Image1'
import useWebAnimations, {
  flipInY,
} from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    position: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 50,
    height: 600,
  },
  paper: {
    width: 500,
    height: 400,
    textAlign: "center",
    padding: 10,
    borderRadius: "5%",
  },
  typo1: {
    marginTop: 30,
  },
  typo2: {
    marginTop: 20,
    width: 400,
    marginLeft: 60,
  },
}));

export const Screen1 = () => {
  const classes = useStyles();
 
  const { ref } = useWebAnimations({
    ...flipInY,
    timing: {
      duration: 3000,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });


  return (
    <div className={classes.root}>
      <div>
        <Image1/>
      </div>
      <div ref={ref}>
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h2" className={classes.typo1}>
              TECH SOLVE
            </Typography>
          <Typography variant="body2" className={classes.typo2}>
            Tech solve is all about Creative People, Creative Ideas Valuable
            Services, and above all Customer Satisfaction.
          </Typography>
          <Typography variant="body2" className={classes.typo2}>
            Tech solve provides best services in town wether they are remote
            services or some products.
          </Typography>
          <Typography variant="body2" className={classes.typo2}>
            Tech solve has a long list of services and satified customers and a
            number of ongoing projects that will be catter very soon.
          </Typography>
        </Paper>
      </div>
    </div>
  );
};
