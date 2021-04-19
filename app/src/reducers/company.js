import {
  GET_COMPANY,
  GET_COMPANY_FAIL,
  GET_REVENUE,
  GET_REVENUE_FAIL,
} from "../actions/type";

const initialState = {
  lists: null,
  revenue: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COMPANY:
      return {
        ...state,
        lists: payload,
        loading: false,
      };

    case GET_COMPANY_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_REVENUE:
      return {
        ...state,
        revenue: payload,
        loading: false,
      };

    case GET_REVENUE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
