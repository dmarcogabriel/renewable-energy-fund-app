import {put, takeEvery} from 'redux-saga/effects';
import {login, loginSuccess} from './userSlice';

function* fetchUser() {
  yield put(
    loginSuccess({
      user: {
        email: 'email@test.com',
        password: '123456',
        firstName: 'John',
        lastName: 'Lajoye',
      },
    }),
  );
}

export default function* () {
  yield takeEvery(login, fetchUser);
}
