import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Auth from './Auth';
import Onboarding from './Onboarding';
import Main from './Main';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [islogin, setislogin] = useState('');

  useEffect(() => {
    setTimeout(() => {
      uselogin()
      // SplashScreen.hide();
    }, 500);
  }, []);
  const uselogin = () => {
    AsyncStorage.getItem('isLogin', (err, ln) => {
      console.log('ln----------', ln);
      if (ln == '1') {
        setislogin('1');
      } else {
        setislogin('0');
      }
    });
  };

  return (
    <NavigationContainer>
      {islogin == '1' ? (
        <Main />
      ) : islogin == '0' ? (
        <Onboarding />
      ) : (
        <View></View>
      )}
    </NavigationContainer>
  );
};
export default Routes;
