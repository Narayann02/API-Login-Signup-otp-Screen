import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './Auth';
import BottomTab from './BottomTab';
import Home from '../screen/Home';
import PersonalDetails from '../screen/PersonalDetails';
import Security from '../screen/Security';
import PrivacyPolicy from '../screen/PrivacyPolicy';
import HelpandSupport from '../screen/HelpandSupport';
import Residencyapplications from '../screen/Residencyapplications';
import TravelBooking from '../screen/TravelBooking';
import OnlineService from '../screen/OnlineService';
import ServiceDetails from '../screen/ServiceDetails';
import OfflineService from '../screen/OfflineService';
import ChatScreen from '../screen/ChatScreen';
import PassportApplication from '../screen/PassportApplication';
import TwoPassportApplication from '../screen/TwoPassportApplication';
import ThreePassportApplication from '../screen/ThreePassportApplication';
import FourPassportApplication from '../screen/FourPassportApplication';
import FivePassportApplication from '../screen/FivePassportApplication';
import SixPassportApplication from '../screen/SixPassportApplication';
import SevenPassportApplication from '../screen/SevenPassportApplication';
import AttPassportApplication from '../screen/AttPassportApplication';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="HelpandSupport" component={HelpandSupport} />
        <Stack.Screen name="TravelBooking" component={TravelBooking} />
        <Stack.Screen name="OnlineService" component={OnlineService} />
        <Stack.Screen name="OfflineService" component={OfflineService} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        <Stack.Screen name="Residencyapplications" component={Residencyapplications} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="PassportApplication" component={PassportApplication} />
        <Stack.Screen name="TwoPassportApplication" component={TwoPassportApplication} />
        <Stack.Screen name="ThreePassportApplication" component={ThreePassportApplication} />
        <Stack.Screen name="FourPassportApplication" component={FourPassportApplication} />
        <Stack.Screen name="FivePassportApplication" component={FivePassportApplication} />
        <Stack.Screen name="SixPassportApplication" component={SixPassportApplication} />
        <Stack.Screen name="SevenPassportApplication" component={SevenPassportApplication} />
        <Stack.Screen name="AttPassportApplication" component={AttPassportApplication} />
        <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};

export default Main;
