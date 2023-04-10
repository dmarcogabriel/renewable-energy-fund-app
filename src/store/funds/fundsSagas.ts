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
      hour: [
        {'2022-01-01T00:00:00Z': 100},
        {'2022-01-01T01:00:00Z': 101},
        {'2022-01-01T02:00:00Z': 102},
      ],
      day: [
        {'2022-01-01T00:00:00Z': 1000},
        {'2022-01-02T00:00:00Z': 1100},
        {'2022-01-03T00:00:00Z': 1050},
      ],
      week: [
        {'2022-01-01T00:00:00Z': 7000},
        {'2022-01-08T00:00:00Z': 7500},
        {'2022-01-15T00:00:00Z': 8000},
      ],
      month: [
        {'2022-01-01T00:00:00Z': 30000},
        {'2022-02-01T00:00:00Z': 35000},
        {'2022-03-01T00:00:00Z': 40000},
      ],
      year: [{'2022-01-01T00:00:00Z': 50000}, {'2023-01-01T00:00:00Z': 55000}],
      all: [
        {'2022-01-01T00:00:00Z': 50000},
        {'2022-01-02T00:00:00Z': 50500},
        {'2022-01-03T00:00:00Z': 51000},
      ],
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
      hour: [
        {'2021-01-01T00:00:00Z': 50},
        {'2021-01-01T01:00:00Z': 51},
        {'2021-01-01T02:00:00Z': 52},
      ],
      day: [
        {'2021-01-01T00:00:00Z': 500},
        {'2021-01-02T00:00:00Z': 510},
        {'2021-01-03T00:00:00Z': 520},
      ],
      week: [
        {'2021-01-01T00:00:00Z': 3000},
        {'2021-01-08T00:00:00Z': 3200},
        {'2021-01-15T00:00:00Z': 3400},
      ],
      month: [
        {'2021-01-01T00:00:00Z': 15000},
        {'2021-02-01T00:00:00Z': 15500},
        {'2021-03-01T00:00:00Z': 16000},
      ],
      year: [{'2021-01-01T00:00:00Z': 20000}, {'2022-01-01T00:00:00Z': 21000}],
      all: [
        {'2021-01-01T00:00:00Z': 20000},
        {'2021-01-02T00:00:00Z': 20050},
        {'2021-01-03T00:00:00Z': 20100},
      ],
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
      hour: [
        {'2019-01-01T00:00:00Z': 75},
        {'2019-01-01T01:00:00Z': 76},
        {'2019-01-01T02:00:00Z': 77},
      ],
      day: [
        {'2019-01-01T00:00:00Z': 700},
        {'2019-01-02T00:00:00Z': 710},
        {'2019-01-03T00:00:00Z': 720},
      ],
      week: [
        {'2019-01-01T00:00:00Z': 4000},
        {'2019-01-08T00:00:00Z': 4200},
        {'2019-01-15T00:00:00Z': 4400},
      ],
      month: [
        {'2019-01-01T00:00:00Z': 12000},
        {'2019-02-01T00:00:00Z': 12300},
        {'2019-03-01T00:00:00Z': 12600},
      ],
      year: [{'2019-01-01T00:00:00Z': 18000}, {'2020-01-01T00:00:00Z': 18900}],
      all: [
        {'2019-01-01T00:00:00Z': 18000},
        {'2019-01-02T00:00:00Z': 18050},
        {'2019-01-03T00:00:00Z': 18100},
      ],
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
