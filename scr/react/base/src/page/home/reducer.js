import actionType from './constant';

const initialState = {
  name: 'wang',
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_NAME:
      return {
        ...state,
        name: action.payload
      }
    default:
      return {
        ...state
      }
  }
};

export default homeReducer;