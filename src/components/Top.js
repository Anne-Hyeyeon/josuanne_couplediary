import React from "react";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import Header from "./Header";
import { Container } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '130vh',
        backgroundImage: `url(${require("../assets/images/mainphoto2.jpeg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

}))
export default function Top () {
    const classes = useStyles();
    return(
        <Container className={classes.root} maxWidth="lg">
            <CssBaseline />
            <Header />
        </Container>
    )
}