import {all, fork} from 'redux-saga/effects';
import fundsSagas from './funds/fundsSagas';

export default function* rootSaga() {
  yield all([fork(fundsSagas)]);
}
