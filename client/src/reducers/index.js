import { GET_EDUCATION_VIDEOS} from "../actions/types";
const initialState = {
  educationVideos: [],
 
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EDUCATION_VIDEOS:
      return {
        educationVideos: payload
      };
    default:
      return state;
  }
};

export default reducer;
