import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IFund} from '@models/IFundInterface';

interface IFundState {
  fund?: IFund;
  isLoading: boolean;
}

const initialState: IFundState = {
  isLoading: false,
};

export const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {
    getFundDetails(state, _action: PayloadAction<{fundId: string}>) {
      state.isLoading = true;
    },
    getFundDetailsSuccess(state, {payload}: PayloadAction<{fund: IFund}>) {
      state.isLoading = false;
      state.fund = payload.fund;
    },
  },
});

export const {getFundDetails, getFundDetailsSuccess} = fundsSlice.actions;

export default fundsSlice.reducer;
