import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { ReactComponent as Image } from "./images/Creative Idea.svg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) =>({
  root: {
    flexGrow: 1,
    height: 50,
    position: "fixed",  
    width: "100%",
    marginBottom: 60,
    backgroundColor: "lightgrey"
  },
  grid: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10,
  },
  link: {
    textTransform: "uppercase",
    fontSize: 13,
    fontWeight: 400,
    color: "black",
  },
  image: {
    width: 50,
    height: 50,
  },
  menu: {
    fontSize: 13,
    width: 300,
    height: 50,
  },
  paper:{
    backgroundColor: "lightgrey"
  },
  offset: theme.mixins.Grid,
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={2} sm={2}>
          {/* <Paper elevation={0} className={classes.paper}> */}
            <Link className={classes.link}>
              <Image className={classes.image} />
              <Typography variant="h6" >tech solve</Typography>
            </Link>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={2} sm={2}>
          <Paper elevation={0} className={classes.paper}>
            <Link className={classes.link}>Bussiness</Link>
          </Paper>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Paper elevation={0} className={classes.paper}>
            <Link className={classes.link}>Technology</Link>
          </Paper>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Paper elevation={0} className={classes.paper}>
            <Link className={classes.link}>
              Offers
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Paper elevation={0} className={classes.paper}>
            <Link
              className={classes.link}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Products
            </Link>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} className={classes.menu}>
                Product 1
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menu}>
                Product 2
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menu}>
                Product 3
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menu}>
                Product 4
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menu}>
                Product 5
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menu}>
                Product 6
              </MenuItem>
            </Menu>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.offset} />
    </div>
  );
}
