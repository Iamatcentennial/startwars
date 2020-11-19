export const FETCH_STARWARS_PEOPLES = "starwars/FETCH_STARWARS_PEOPLES";
export const FETCH_STARWARS_PEOPLES_ERROR =
  "starwars/FETCH_STARWARS_PEOPLES_ERROR";
export const FETCH_STARWARS_PEOPLES_SUCCESS =
  "starwars/FETCH_STARWARS_PEOPLES_SUCCESS";
// export const FETCH_CHARACTER_MOVIE_DETAILS =
//   "starwars/FETCH_CHARACTER_MOVIE_DETAILS";
export const FETCH_CHARACTER_MOVIE_DETAILS_SUCCESS =
  "starwars/FETCH_CHARACTER_MOVIE_DETAILS_SUCCESS";
export const FETCH_CHARACTER_MOVIE_DETAILS_ERROR =
  "starwars/FETCH_CHARACTER_MOVIE_DETAILS_ERROR";
  export const SET_CURRENT_SELECTION = 'starwars/SET_CURRENT_SELECTION';

export const fetchStarwarsPeople = () => ({
  type: FETCH_STARWARS_PEOPLES
});
export const fetchStarwarsPeopleSuccess = peopleData => ({
  type: FETCH_STARWARS_PEOPLES_SUCCESS,
  peopleData
});
export const fetchStarwarsPeopleError = error => ({
  type: FETCH_STARWARS_PEOPLES_ERROR,
  error
});

export const fetchCharacterMovieDetailsSuccess = movieData => {
  return { type: FETCH_CHARACTER_MOVIE_DETAILS_SUCCESS, movieData };
};

export const fetchCharacterMovieDetailsError = error => ({
  type: FETCH_CHARACTER_MOVIE_DETAILS_ERROR,
  error
});

export const setCurrentCharacterSelection = currentCharacter => ({
  type: SET_CURRENT_SELECTION,
  currentCharacter

})