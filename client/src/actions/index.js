import { GET_EDUCATION_VIDEOS } from "./types";
import axios from 'axios'

export const geteducationVideos = () => dispatch => {
  axios
    .get("/educationvideos")
    .then(res => dispatch({ type: GET_EDUCATION_VIDEOS, payload: res.data }))
    .catch(err => console.log(err));
};
