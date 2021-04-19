import axios from "axios";

import { GET_COMPANY, GET_COMPANY_FAIL } from "./type";

export const loadcompany = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.npoint.io/4ca5aaf459a573940672");
    console.log(res);
    dispatch({
      type: GET_COMPANY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_COMPANY_FAIL,
    });
  }
};
