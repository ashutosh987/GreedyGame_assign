import { GET_REVENUE, GET_REVENUE_FAIL } from "../actions/type";

const initialState = {
  revenue: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
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
