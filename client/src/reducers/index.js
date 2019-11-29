import { GET_EDUCATION_VIDEOS, GET_EDUCATION_GAMES } from "../actions/types";
const initialState = {
  educationVideos: [],
  educationGames: []
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
    default:
      return state;
  }
};

export default reducer;
