import {
  FETCH_STARWARS_PEOPLES,
  FETCH_STARWARS_PEOPLES_ERROR,
  FETCH_STARWARS_PEOPLES_SUCCESS,
  FETCH_CHARACTER_MOVIE_DETAILS_SUCCESS,
  FETCH_CHARACTER_MOVIE_DETAILS_ERROR,
  SET_CURRENT_SELECTION
} from "./StarWars.action";

const initialState = {
  isLoading: false,
  isMovieDetailsLoading: false
};
export const starwarsPeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARWARS_PEOPLES: {
      return {
        ...state,
        isLoading: true
      };
    }

    case FETCH_STARWARS_PEOPLES_SUCCESS: {
      return {
        ...state,
        data: action.peopleData,
        isLoading: false
      };
    }
    case FETCH_STARWARS_PEOPLES_ERROR: {
      return {
        ...state,
        errors: action.error,
        isLoading: false
      };
    }
  
    case FETCH_CHARACTER_MOVIE_DETAILS_SUCCESS: {
      return {
        ...state,
        movieData: action.movieData,
        isMovieDetailsLoading:false
      };
    }
    case FETCH_CHARACTER_MOVIE_DETAILS_ERROR: {
      return {
        ...state,
        errors: action.error,
        isMovieDetailsLoading:false
      };
    }
    case SET_CURRENT_SELECTION: {
      return {
        ...state,
        currentCharacter: action.currentCharacter,
        isMovieDetailsLoading:true
      };
    }
    default:
      return state;
  }
};

export default starwarsPeopleReducer;
