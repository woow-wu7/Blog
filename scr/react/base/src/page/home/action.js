import actionType from './constant';

export const getName = (name) => {
  return {
    type: actionType.GET_NAME,
    payload: name,
  }
}