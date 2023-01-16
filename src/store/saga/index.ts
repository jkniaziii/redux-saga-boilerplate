import { GET_USERS } from '../types/index';
import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getUsersData, getUsersDataAfter } from '../actions';


const getUsers = () => axios.get(`${process.env.REACT_APP_URL}/`);

function* getUsersSaga() {
    try {
        
        yield put(getUsersDataAfter(true))
        //@ts-ignore
        const response = yield call(getUsers);
        yield put(getUsersData(response.data));
        yield put(getUsersDataAfter(false));
    } catch (e) { }
}


export default all([
    takeLatest(GET_USERS, getUsersSaga)
])