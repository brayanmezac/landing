import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

function Presentacion() {
  return (
    <Grid>
      <Box
        sx={{ width: "100%", maxWidth: 500 }}
        style={{ textAlign: "center", padding: "70px" }}
      >
        <Grid>
          <Typography
            variant="h4"
            style={{
              fontWeight: "800",
              fontFamily: "Nunito",
              color: "#F2F2F2",
            }}
            component="div"
            gutterBottom
          >
            Smart and efficient solutions, hire the best team
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            style={{
              color: "#fff",
              margin: "0 15% ",
              fontFamily: "Nunito",
              fontWeight: "500",
            }}
          >
            We are a company specialized in software development, with a good
            full stack team made up of more than 10 programmers, who have
            experience and have worked with multiple clients around the world.
            We have knowledge in AI, full stack development, UX UI design,
            cybersecurity, dev ops, outsourcing and more services that you can
            have with just one click. are you interested? that's the spirit,
            let's get to work!
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Presentacion;
