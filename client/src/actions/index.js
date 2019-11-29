import { GET_EDUCATION_VIDEOS ,GET_EDUCATION_GAMES} from "./types";
import axios from 'axios'

export const geteducationVideos = () => dispatch => {
  axios
    .get("/video")
    .then(res => dispatch({ type: GET_EDUCATION_VIDEOS, payload: res.data }))
    .catch(err => console.log(err));
};
export const geteducationGames = () => dispatch => {
  axios
    .get("/educationgames")
    .then(res => dispatch({ type: GET_EDUCATION_GAMES, payload: res.data }))
    .catch(err => console.log(err));
};
