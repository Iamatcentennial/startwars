import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    padding: theme.spacing(2)
  }
}));

export default function MovieDetails() {
  const classes = useStyles();
  const peopleData = useSelector(state => state.starWars);
  const getMovieDetails = () => {
    if (Object.prototype.hasOwnProperty.call(peopleData, "movieData")) {
      const {
        movieData: { title, release_date }
      } = peopleData;
      return { title, release_date };
    }
    return false;
  };

  return (
    <div>
      <Typography variant="h6">
        Last Movie Details(Name/Year){" "}
      </Typography>
      <Card className={classes.formControl}>
        {getMovieDetails() ? (
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="subtitle2">
                {getMovieDetails().title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                {getMovieDetails().release_date}
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="subtitle2">No details to show</Typography>
        )}
      </Card>
    </div>
  );
}
