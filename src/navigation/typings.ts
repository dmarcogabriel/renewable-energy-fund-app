import {AppTab, AuthStack, HomeStack} from '@constants/RouteNames';

export type RootStackParamsList = {
  [AppTab.Home]: undefined;
  [AppTab.Portfolio]: undefined;
  [AppTab.Trade]: undefined;
};

export type AuthStackParamsList = {
  [AuthStack.Login]: undefined;
  [AuthStack.SignUp]: undefined;
};

export type HomeStackParamsList = {
  [HomeStack.Home]: undefined;
  [HomeStack.FundDetails]: {title: string; id: string};
};
