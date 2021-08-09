import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} positiom="static">
      <Toolbar>
        <Typography variant="h6" color="primary">
          Mindworks Interactive
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
