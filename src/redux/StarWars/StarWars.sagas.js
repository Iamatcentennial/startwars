import { call, put, takeLatest } from "redux-saga/effects";
import apiClient from "../../lib/apiClient";
import {
  FETCH_STARWARS_PEOPLES,
  SET_CURRENT_SELECTION,
  fetchStarwarsPeopleSuccess,
  fetchStarwarsPeopleError,
  fetchCharacterMovieDetailsSuccess,
  fetchCharacterMovieDetailsError
} from "./StarWars.action";

export function* handleFetchPeopleData() {
  try {
    const peopleData = yield call(apiClient.fetchPeoples);
    yield put(fetchStarwarsPeopleSuccess(peopleData));
  } catch (error) {
    yield put(fetchStarwarsPeopleError(error));
  }
}

export function* handleFetchMoviesDetails({currentCharacter:{films}}) {
  try {
    console.log("In saga");
    console.log(films);
    const movieData = yield call(apiClient.fetchMovieDetails, films[films.length-1]);
    yield put(fetchCharacterMovieDetailsSuccess(movieData));
  } catch (error) {
    yield put(fetchCharacterMovieDetailsError());
  }
}

/* istanbul ignore next */
export default function* starWarsSagaWatcher() {
  yield takeLatest(FETCH_STARWARS_PEOPLES, handleFetchPeopleData);
  yield takeLatest(SET_CURRENT_SELECTION, handleFetchMoviesDetails);
}
