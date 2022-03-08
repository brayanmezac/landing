import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";
import Presentacion from "./components/Presentacion";
import Contact from "./components/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background:
      "linear-gradient(to right, #2C5364, #203A43, #0F2027)" /* Chrome 10-25, Safari 5.1-6 */,
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Presentacion />
      <PlaceToVisit />
      <Contact />
    </div>
  );
}
