import { combineReducers } from "redux";
import { starwarsPeopleReducer } from "./StarWars/StarWars.reducer";

export default combineReducers({
  starWars: starwarsPeopleReducer
});
