// Dependancies
import axios from "axios";

export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAIL = "GET_DATA_FAIL";

export const getAnime = () => dispatch => {
  dispatch({ type: GET_DATA_START });
  axios
    .get(
      "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
    )
    .then(res => {
      console.log(res);
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data.title });
    })
    .catch(err => console.log(err.response));
};
