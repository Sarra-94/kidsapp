import {
  GET_EDUCATION_VIDEOS,
  GET_EDUCATION_GAMES,
  GET_READING_BOOKS,
  GET_MOVIE,
  GET_LISTEN_BOOKS
} from "./types";
import axios from "axios";

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
export const getreadingbooks = () => dispatch => {
  axios
    .get("/readingbooks")
    .then(res => dispatch({ type: GET_READING_BOOKS, payload: res.data }))
    .catch(err => console.log(err));
};
export const getMovie = () => dispatch => {
  axios
    .get("/movie")
    .then(res => dispatch({ type: GET_MOVIE, payload: res.data }))
    .catch(err => console.log(err));
};
export const getlistengbooks = () => dispatch => {
  axios
    .get("/listningbooks")
    .then(res => dispatch({ type: GET_LISTEN_BOOKS, payload: res.data }))
    .catch(err => console.log(err));
};
