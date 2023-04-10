import {PayloadAction} from '@reduxjs/toolkit';
import {takeEvery, put} from 'redux-saga/effects';
import {IFund} from '@models/IFundInterface';
import {getFundDetails, getFundDetailsSuccess} from '@store/funds/fundsSlice';

const MOCK_FUNDS: {[key: string]: IFund} = {
  wfnd: {},
  sfnd: {},
  nfnd: {},
};

function* getSagaDetailsById({payload}: PayloadAction<{fundId: string}>) {
  const fund = MOCK_FUNDS[payload.fundId];
  yield put(getFundDetailsSuccess({fund}));
}

export default function* watchAll() {
  yield takeEvery(getFundDetails, getSagaDetailsById);
}
