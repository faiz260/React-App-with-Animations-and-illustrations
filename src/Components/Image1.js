import React from "react";
import { ReactComponent as Image } from "./images/Creative Idea.svg";
import { makeStyles } from "@material-ui/core/styles";
import useWebAnimations, {
  flipInX,
} from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) =>({
    image: {
        width: 300,
        height: 300,
        marginRight: 50,
      },
}))

export const Image1 = () => {
  const classes = useStyles();
   const { ref} = useWebAnimations({
    ...flipInX,
    timing: {
      duration: 3000,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  return (
    <div>
      <div ref={ref}>
        <Image className={classes.image} ref={ref} />
      </div>
    </div>
  );
};
