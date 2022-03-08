import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import AlternateEmailOutlined from "@material-ui/icons/AlternateEmailOutlined";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "rgba(0, 0, 0, 0.7)",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#F2C53D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#F2C53D",
    fontSize: "4rem",
  },
  "@global": {
    html: {
      [theme.breakpoints.up("sm")]: {
        fontSize: 18,
      },
    },
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Grid>
      <div className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
              <span className={classes.colorText}>ColombianDevs.</span>
            </h1>
            <IconButton href="#contact">
              <AlternateEmailOutlined className={classes.icon} />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <Grid>
            <Typography variant="h2">
              <h2
                style={{
                  fontSize: "3.0rem",
                  color: "#F2C53D",
                  fontWeight: "600",
                  fontFamily: "Nunito",
                  "@media (min-width:600px)": {
                    fontSize: "0.5rem",
                  },
                }}
              >
                Welcome to <br /> ColombianDevs
              </h2>
            </Typography>
            <Scroll to="place-to-visit" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </Grid>
        </Collapse>
      </div>
    </Grid>
  );
}
