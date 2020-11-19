import { all, fork } from "redux-saga/effects";
import starWarsSagaWatcher from "./StarWars/StarWars.sagas";

export default function* sagas() {
  yield all([fork(starWarsSagaWatcher)]);
}
