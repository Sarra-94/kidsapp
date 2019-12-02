import {
  GET_EDUCATION_VIDEOS,
  GET_EDUCATION_GAMES,
  GET_READING_BOOKS,
  GET_MOVIE
} from "../actions/types";


const initialState = {
  educationVideos: [],
  educationGames: [],
  readingbooks: [],
  movie: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EDUCATION_VIDEOS:
      return {
        educationVideos: payload
      };
    case GET_EDUCATION_GAMES:
      return {
        educationGames: payload
      };
    case GET_READING_BOOKS:
      return {
        readingbooks: payload
      };
    case GET_MOVIE:
      return {
        movie: payload
      };
    default:
      return state;
  }
};

export default reducer;
