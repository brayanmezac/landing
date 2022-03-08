import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";
import useWindowPosition from "../hook/useWindowPosition";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <>
      <h1
        style={{
          fontFamily: "Nunito",
          fontWeight: "bold",
          fontSize: "3rem",
         
          textAlign:"center",
          
          
        }}
      >
        <a  style={{ color: "#F2C53D",textDecoration:"none"}} href="https://github.com/juanestebanperezm" target="_blank">Our works</a>
      </h1>
      <div className={classes.root} id="place-to-visit">
        <ImageCard place={places[1]} checked={checked} />
        <ImageCard place={places[0]} checked={checked} />
      </div>

      <div className={classes.root} id="place-to-visit">
        <ImageCard place={places[2]} checked={checked} />
        <ImageCard place={places[3]} checked={checked} />
      </div>
    </>
  );
}
