import axios from "axios";

import { GET_REVENUE, GET_REVENUE_FAIL } from "./type";

export const loadrevenue = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.npoint.io/d734975d2aee62d197ef");
    console.log(res);
    dispatch({
      type: GET_REVENUE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_REVENUE_FAIL,
    });
  }
};
