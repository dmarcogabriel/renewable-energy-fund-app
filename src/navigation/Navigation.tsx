import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppTab,
  AuthStack as AuthStackNames,
  HomeStack as HomeStackNames,
} from '@constants/RouteNames';

import {
  RootStackParamsList,
  AuthStackParamsList,
  HomeStackParamsList,
} from './typings';
import {HomeScreen} from '../screens/HomeScreen';
import {TradeScreen} from '../screens/TradeScreen';
import {PortfolioScreen} from '../screens/PortfolioScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {FundDetailsScreen} from '../screens/FundDetailsScreen';

const Tab = createBottomTabNavigator<RootStackParamsList>();
const AuthStack = createNativeStackNavigator<AuthStackParamsList>();
const HomeStack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStackNavigator = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name={HomeStackNames.Home} component={HomeScreen} />
    <HomeStack.Screen
      name={HomeStackNames.FundDetails}
      component={FundDetailsScreen}
    />
  </HomeStack.Navigator>
);

export const Navigation = () => {
  const isLogged = true;

  return (
    <NavigationContainer>
      {isLogged ? (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name={AppTab.Home} component={HomeStackNavigator} />
          <Tab.Screen name={AppTab.Trade} component={TradeScreen} />
          <Tab.Screen name={AppTab.Portfolio} component={PortfolioScreen} />
        </Tab.Navigator>
      ) : (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen
            name={AuthStackNames.Login}
            component={LoginScreen}
          />
          <AuthStack.Screen
            name={AuthStackNames.SignUp}
            component={SignUpScreen}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};
