import {PayloadAction} from '@reduxjs/toolkit';
import {takeEvery, put} from 'redux-saga/effects';
import {IFund} from '@models/IFundInterface';
import {getFundDetails, getFundDetailsSuccess} from '@store/funds/fundsSlice';

const MOCK_FUNDS: {[key: string]: IFund} = {
  wfnd: {
    totalAmount: 1000000,
    year: 2022,
    earningsPercentage: 5.5,
    data: {
      hour: [8, -17, 6, -11, -16, -10, 18, 9, 19, -1],
      day: [15, 20, -19, -2, -6, 0, -3, -9, 14, 17],
      week: [5, -3, 1, -18, 10, 11, 2, -20, -9, 13],
      month: [-1, 12, 18, -14, -8, 4, -13, -16, -19, 20],
      year: [19, -17, 2, 16, -20, 13],
      all: [6, 7, -5, 15, 10, -18, -12, -20, 3, -9],
    },
    infoAndStats: {
      aum: 1000000,
      vintageRange: {
        min: 2020,
        max: 2023,
      },
      priceAtClose: 10.5,
      issueDate: '2022-01-01',
      ter: 1.5,
      priceAtOpen: 10.0,
    },
  },
  sfnd: {
    totalAmount: 750000,
    year: 2021,
    earningsPercentage: 3.5,
    data: {
      hour: [-11, 7, -12, -4, -9, 18, 10, 12, -6, 14],
      day: [0, -10, -1, -17, 2, 10, 7, 16, 20, -4],
      week: [-7, 4, 1, 9, -3, -14, 3, 20, -8, -19],
      month: [3, -19, 8, 6, 12, -2, -20, 5, -11, -5],
      year: [19, 6, -17, 0, -6, 13],
      all: [-8, 18, -3, 14, -16, 9, 15, -2, 7, 1],
    },
    infoAndStats: {
      aum: 750000,
      vintageRange: {
        min: 2019,
        max: 2022,
      },
      priceAtClose: 15.5,
      issueDate: '2021-01-01',
      ter: 2.0,
      priceAtOpen: 15.0,
    },
  },
  nfnd: {
    totalAmount: 500000,
    year: 2019,
    earningsPercentage: 4.2,
    data: {
      hour: [11, -5, -7, -3, -1, -8, 5, 13, -20, -11],
      day: [3, -16, 12, -18, -8, -1, -9, -7, 14, 20],
      week: [2, 16, -4, 12, 4, 9, -19, -17, -6, -8],
      month: [15, -19, -6, -8, 9, -12, -3, 19, 18, 20],
      year: [-6, 7, -1, -2, 20, 17],
      all: [10, 11, -3, -18, -1, -12, -16, 7, -20, -9],
    },
    infoAndStats: {
      aum: 500000,
      vintageRange: {
        min: 2018,
        max: 2021,
      },
      priceAtClose: 10.5,
      issueDate: '2019-01-01',
      ter: 1.5,
      priceAtOpen: 10.0,
    },
  },
};

function* getSagaDetailsById({payload}: PayloadAction<{fundId: string}>) {
  const fund = MOCK_FUNDS[payload.fundId];
  yield put(getFundDetailsSuccess({fund}));
}

export default function* watchAll() {
  yield takeEvery(getFundDetails, getSagaDetailsById);
}
