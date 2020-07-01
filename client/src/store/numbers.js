import { api } from '../services/api';

const GET_NUMBERS_REQUEST = 'GET_NUMBERS_REQUEST';
const GET_NUMBERS_SUCCESS = 'GET_NUMBERS_SUCCESS';
const GET_NUMBERS_FAILURE = 'GET_NUMBERS_FAILURE';

export const getNumbers = () => async (dispatch) => {
  dispatch({
    type: GET_NUMBERS_REQUEST,
  });

  try {
    const { data } = await api.get('/numbers');
    console.log(data);

    dispatch({
      type: GET_NUMBERS_SUCCESS,
      payload: {
        data,
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
