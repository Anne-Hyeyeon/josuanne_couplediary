import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
root: {
    marginTop: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',

},
avatar: {
    fontSize: '1rem'
},

barTitle: {
    flexGrow: '1',
    fontFamily: 'Nanum Myeongjo',
    color: 'white',
    fontSize: 15
},

appbarWrapper: {
    width: '80%',
    margin: '0 auto'
},

title: {
    color: '#fff',
    fontFamily: 'Square Peg'
}
}));

export default function Header () {
    const classes = useStyles();
    return(
        <div>
            <AppBar color="transparent"  elevation={0} position="static">
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.barTitle}>Joshuanne Diary</h1>
                </Toolbar>
            </AppBar>
            <div className={classes.root}>
                <h1 className={classes.title}>
                    Welcome to <br /> Joshua & Anne World
                </h1>
            </div>
        </div>
    )
}