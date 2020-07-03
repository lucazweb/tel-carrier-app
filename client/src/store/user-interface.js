export const ENABLE_LOADING = 'ENABLE_LOADING';
export const DISABLE_LOADING = 'DISABLE_LOADING';

const initialState = {
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ENABLE_LOADING:
      return { ...state, loading: true };

    case DISABLE_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
}
