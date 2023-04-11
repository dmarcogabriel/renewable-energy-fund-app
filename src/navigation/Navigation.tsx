import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppTab,
  AuthStack as AuthStackNames,
  HomeStack as HomeStackNames,
} from '@constants/RouteNames';
import {useAppSelector} from '@hooks/useRedux';
import {selectUserState} from '@store/user/userSelector';
import {
  RootStackParamsList,
  AuthStackParamsList,
  HomeStackParamsList,
} from './typings';
import HomeIcn from '@assets/icons/Home.svg';
import TradeIcn from '@assets/icons/Trade.svg';
import PortfolioIcn from '@assets/icons/Portfolio.svg';
import {HomeScreen} from '../screens/HomeScreen';
import {TradeScreen} from '../screens/TradeScreen';
import {PortfolioScreen} from '../screens/PortfolioScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {FundDetailsScreen} from '../screens/FundDetailsScreen';

const Tab = createBottomTabNavigator<RootStackParamsList>();
const AuthStack = createNativeStackNavigator<AuthStackParamsList>();
const HomeStack = createNativeStackNavigator<HomeStackParamsList>();

const FOCUSED_COLOR = '#770FDF';
const UNFOCUSED_COLOR = '#000000';

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
  const {user} = useAppSelector(selectUserState);

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused}) => {
              let IconComponent;

              switch (route.name) {
                case AppTab.Home: {
                  IconComponent = HomeIcn;
                  break;
                }
                case AppTab.Portfolio: {
                  IconComponent = PortfolioIcn;
                  break;
                }
                case AppTab.Trade: {
                  IconComponent = TradeIcn;
                }
              }

              return (
                <IconComponent
                  color={focused ? FOCUSED_COLOR : UNFOCUSED_COLOR}
                />
              );
            },
            tabBarActiveTintColor: FOCUSED_COLOR,
            tabBarInactiveTintColor: UNFOCUSED_COLOR,
          })}>
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
