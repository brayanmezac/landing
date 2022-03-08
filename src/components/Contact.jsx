import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

function Contact() {
  return (
    <Box sx={{ flexGrow: 1 }} id="contact">
      
      <AppBar position="static" style={{ backgroundColor: "rgb(0,0,0,0.6)" }}>
      <Typography variant="h4" style={{textAlign:"center", fontWeight: "500", fontFamily:"Nunito",fontWeight:"500"}}>
        Keep in touch with us
      </Typography>
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            href="https://linkr.bio/ColombianDevs" target="_blank"
            style={{
              fontWeight: "500",
              backgroundColor: "rgba(153, 0, 8, 0.5)",
              color: "#fff",
            }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Contact;
