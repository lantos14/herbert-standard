import 'regenerator-runtime/runtime';
import {
  takeEvery, put, delay,
} from 'redux-saga/effects';

function* getAPIResponse(action) {
  // call here
  try {
    yield delay(100);
    yield put({
      type: 'TODO_ADD_SUCCEEDED',
      payload: action.payload,
    });
  } catch (error) {
    yield put({
      type: 'TODO_ADD_FAILED',
      payload: error,
    });
    console.log(error); //eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery('TODO_ADD_REQUESTED', getAPIResponse);
}
