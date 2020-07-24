import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {ReactComponent as Image} from "./images/Creative Idea.svg"
import {Typography, Link } from "@material-ui/core"

const useStyles = makeStyles({
    root:{
        height: 500,
        display: "flex",
        justifyContent: "space-around",
        alignItems: 'center',
        backgroundColor: "yellow",
    },
    image:{
        height: 100,
        width: 100
    },
    typoDiv1:{
        marginTop: 40
    },
    typoDiv2:{
        marginTop: 40,
        paddingTop: 100
    },
    typo2:{
        fontSize: 14,
        marginBottom: 10
    },
    typo:{
        width: 300,
        textAlign: "center",
        borderBottom: "1px solid grey",
        marginBottom: 20
    },
    link:{
        marginBottom: 30,
        fontSize: 16,
        fontWeight: 400,
        color: "black",
    }
})

export const Bottom = () => {
  const classes = useStyles();
    return (
        <div className={classes.root}>
            <div calssName={classes.imageDiv}>
                <Image className={classes.image}/>
                <Typography variant='h2'>Tech Solve</Typography>
            </div>
            <div className={classes.typoDiv1}>
                <Typography variant="h6" className={classes.typo} ><Link className={classes.link}>Bussiness</Link></Typography>
                <Typography variant="h6"  className={classes.typo}><Link className={classes.link}>Technology</Link></Typography>
                <Typography variant="h6"  className={classes.typo}><Link className={classes.link}>Offers</Link></Typography>
                <Typography variant="h6"  className={classes.typo}><Link className={classes.link}>Products</Link></Typography>
                <Typography variant="h6"  className={classes.typo}><Link className={classes.link}>About</Link></Typography>
            </div>
            <div  className={classes.typoDiv2}>
            <Typography variant="h6" className={classes.typo2} > Contact Us: 09-2310904-34</Typography>
                <Typography variant="h6"  className={classes.typo2}>Email: techsolve@gmail.com</Typography>
                <Typography variant="h6"  className={classes.typo2}>Facebook:  facebook.com/techsolve</Typography>
                <Typography variant="h6"  className={classes.typo2}>Twitter:  twitter.com/techsolve</Typography>
                <Typography variant="h6"  className={classes.typo2}>Instagram: instagram.com/techsolve</Typography>
            </div>
        </div>
    )
}