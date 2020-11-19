import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {setCurrentCharacterSelection} from '../redux/StarWars/StarWars.action';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  }
}));

export default function SelectPeople() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [character, setCharacter] = React.useState("");
  const peopleData = useSelector(state => state.starWars);

  const getPeopleData = () => {
    if (Object.prototype.hasOwnProperty.call(peopleData, "data")) {
      const {
        data: { results }
      } = peopleData;
      return results;
    }
    return [];
  };

  const handleChange = event => {
    setCharacter(event.target.value);
    dispatch(setCurrentCharacterSelection(event.target.value));
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Character</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={character}
          onChange={handleChange}
        >
          {getPeopleData().map(person => (
            <MenuItem key={person.name} value={person}>
              {person.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
