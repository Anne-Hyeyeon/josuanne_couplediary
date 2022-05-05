import React from "react";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${require("../assets/images/mainphoto2.jpeg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

}))
export default function Top () {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CssBaseline />
            <Header />
        </div>
    )
}