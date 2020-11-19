import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { fetchStarwarsPeople } from "./redux/StarWars/StarWars.action";
import SelectCharacter from "./components/SelectPeople";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    backgroundColor: '#caa472',
    overflow:'auto',
    minWidth:320
  }
}));

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => dispatch(fetchStarwarsPeople()), []);
  return (
    <Card className={classes.root}>
      <SelectCharacter />
      <MoviesList />
      <MovieDetails />
    </Card>
  );
}

export default App;
