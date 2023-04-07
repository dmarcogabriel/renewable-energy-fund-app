import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface IUserState {
  user?: IUser;
  isSubmitting: boolean;
}

const initialState: IUserState = {
  isSubmitting: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state) {
      state.isSubmitting = true;
    },
    loginSuccess(state, {payload}: PayloadAction<{user: IUser}>) {
      state.isSubmitting = false;
      state.user = payload.user;
    },
  },
});

export const {login, loginSuccess} = userSlice.actions;

export default userSlice.reducer;
