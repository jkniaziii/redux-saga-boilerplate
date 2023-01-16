import { GET_USERS_SUCCESS, GET_USERS_SUCCESS_AFTER } from '../types/index';
const initialState = {
    users: [],
    isLoadung: false,
}



const usersReducer = (state = initialState, actions: any) => {
    switch (actions.type) {
        case GET_USERS_SUCCESS:
            return { ...state, users: actions.payload }
        case GET_USERS_SUCCESS_AFTER:
            return { ...state, isLoadung: actions.payload }
        default:
            return state;
    }
};

export default usersReducer;