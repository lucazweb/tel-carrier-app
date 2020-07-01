import { api } from '../services/api';
import { ENABLE_LOADING, DISABLE_LOADING } from './user-interface';

const GET_NUMBERS_REQUEST = 'GET_NUMBERS_REQUEST';
const GET_NUMBERS_SUCCESS = 'GET_NUMBERS_SUCCESS';
const GET_NUMBERS_FAILURE = 'GET_NUMBERS_FAILURE';

export const getNumbers = () => async (dispatch) => {
  dispatch({
    type: GET_NUMBERS_REQUEST,
  });

  dispatch({
    type: ENABLE_LOADING,
  });

  try {
    const { data } = await api.get('/numbers');

    dispatch({
      type: GET_NUMBERS_SUCCESS,
      payload: {
        data,
      },
    });

    dispatch({
      type: DISABLE_LOADING,
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
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NUMBERS_REQUEST:
      return state;

    case GET_NUMBERS_SUCCESS:
      const { data } = action.payload;
      return { ...state, data };

    case GET_NUMBERS_FAILURE:
      const { error } = action.payload;
      return { ...state, error };

    default:
      return state;
  }
}
