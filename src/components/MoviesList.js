import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    minWidth: 250
  },

  display: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function MoviesList() {
  const classes = useStyles();

  const peopleData = useSelector(state => state.starWars);
  const getMovies = () => {
    if (Object.prototype.hasOwnProperty.call(peopleData, "currentCharacter")) {
      const {
        currentCharacter: { films },
        isMovieDetailsLoading
      } = peopleData;
      return { films, isMovieDetailsLoading };
    }
    return false;
  };

  const apiData = getMovies();
  if (!apiData)
    return (
      <Card className={classes.formControl}>
        <Typography variant="subtitle2">No character is selected</Typography>
      </Card>
    );
  return (
    <div>
      <Typography variant="h6">Movies List</Typography>
      <Card className={classes.formControl}>
        {apiData.isMovieDetailsLoading ? (
          <LinearProgress className={classes.display} />
        ) : (
          apiData.films.map(movie => (
            <MenuItem key={movie} value={movie}>
              {movie}
            </MenuItem>
          ))
        )}
      </Card>
    </div>
  );
}
