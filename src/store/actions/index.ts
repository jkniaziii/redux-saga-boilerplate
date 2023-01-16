import { INCREMENT, DECREMENT, ADD_NUMBER, GET_USERS, GET_USERS_SUCCESS, GET_USERS_SUCCESS_AFTER } from '../types/index';


export const incrementer = () => {
    return {
        type: INCREMENT
    }
};

export const decrementer = () => {
    return {
        type: DECREMENT
    }
};

export const addNumber = (data: any) => {
    return {
        type: ADD_NUMBER,
        payload: data
    }
}

export const getUsersData = (data: any) => {
    return {
      type: GET_USERS_SUCCESS,
      payload: data
    };
  };

  export const getUsers = () => {
    return {
      type: GET_USERS,
    };
  };

  export const getUsersDataAfter = (data: any) => {
    return {
      type: GET_USERS_SUCCESS_AFTER,
      payload: data
    };
  };
  