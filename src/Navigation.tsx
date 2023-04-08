import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './screens/HomeScreen';
import {TradeScreen} from './screens/TradeScreen';
import {PortfolioScreen} from './screens/PortfolioScreen';
import {LoginScreen} from './screens/LoginScreen';
import {SignUpScreen} from './screens/SignUpScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const isLogged = true;

  return (
    <NavigationContainer>
      {isLogged ? (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Trade" component={TradeScreen} />
          <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
