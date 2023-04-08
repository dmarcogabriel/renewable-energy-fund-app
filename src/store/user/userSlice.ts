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
}

const initialState: IUserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, {payload}: PayloadAction<{user: IUser}>) {
      state.user = payload.user;
    },
  },
});

export const {login} = userSlice.actions;

export default userSlice.reducer;
