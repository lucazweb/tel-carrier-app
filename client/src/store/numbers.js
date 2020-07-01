import { api } from '../services/api';

const GET_NUMBERS_REQUEST = 'GET_NUMBERS_REQUEST';
const GET_NUMBERS_SUCCESS = 'GET_NUMBERS_SUCCESS';
const GET_NUMBERS_FAILURE = 'GET_NUMBERS_FAILURE';

export const getNumbers = (page = 1, limit = 10) => async (dispatch) => {
  dispatch({
    type: GET_NUMBERS_REQUEST,
  });

  try {
    const { data, headers } = await api.get('/numbers', {
      params: {
        page,
        limit,
      },
    });

    dispatch({
      type: GET_NUMBERS_SUCCESS,
      payload: {
        data,
        totalPages: headers['x-total-count'],
      },
    });
  } catch (error) {
    dispatch({
      type: GET_NUMBERS_FAILURE,
      payload: {
        error,
      },
    });
  }
};

// REDUCER
const initialState = {
  data: [],
  totalPages: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NUMBERS_REQUEST:
      return state;

    case GET_NUMBERS_SUCCESS:
      const { data, totalPages } = action.payload;
      return { ...state, data, totalPages };

    case GET_NUMBERS_FAILURE:
      const { error } = action.payload;
      return { ...state, error };

    default:
      return state;
  }
}
