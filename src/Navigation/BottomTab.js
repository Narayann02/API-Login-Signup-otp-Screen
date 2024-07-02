import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, Modal} from 'react-native';
import Imagepath from '../constant/Imagepath';
import Notification from '../screen/Notification';
import Profile from '../screen/Profile';
import Home from '../screen/Home';
import Booking from '../screen/Booking';
import Homeclose from '../assest/svg/Homeclose.svg';
import Homeopen from '../assest/svg/Homeopen.svg';
import CalendaroOpen from '../assest/svg/CalendaroOpen.svg';
import ProfilOpen from '../assest/svg/ProfilOpen.svg';
import NotificationOpen from '../assest/svg/NotificationOpen.svg';
import CalendarClose from '../assest/svg/CalendarClose.svg';
import NotificationClose from '../assest/svg/NotificationClose.svg';
import ProfileClose from '../assest/svg/ProfileClose.svg';
import Login from '../screen/Login';
import {StylesGloble} from '../helper/GlobleCss';

const Tab = createBottomTabNavigator();

function BottomTab({navigation}) {
  const [focus, setfocus] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(true);
  // };
  return (
    <>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          activeTintColor: '#ffffff',
          inactiveTintColor: '#d9d9d9',
          activeColor: '#ffffff',
          inactiveColor: '#443f47',
          tabBarShowLabel: true,

          tabBarStyle: {
            backgroundColor: '#ffffff',
            
            height: 60,
            activeTintColor: '#ffffff',
          },
          tabBarLabelStyle: {
            fontSize: 13,
            color: '#FFFFFF',
          },
        }}>
        <Tab.Screen
          name={'Home'}
          component={Home}
          activeColor={'#ffffff'}
          screenOptions={{
            headerShown: false,
          }}
          inactiveColor={'#443f47'}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    height: 80,
                    width: 68,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* <Image
                                style={{
                                    tintColor: focused ? '#F3691C' : '#999999',
                                    width:24,
                                    height:24
                                }}
                                source={Imagepath.HomeActive} /> */}

                  {focused ? <Homeclose /> : <Homeopen />}

                  <Text
                    style={{
                      color: focused ? '#9846D7' : '#5D5D5D',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={'Booking'}
          component={Booking}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    height: 80,
                    width: 80,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* <Image
                                style={{
                                    backgroundColor: focused ? '#9846D7' : '#5D5D5D',
                                    width:24,
                                    height:24
                                }}
                                source={Imagepath.Booking} /> */}

                  {focused ? <CalendarClose /> : <CalendaroOpen />}

                  <Text
                    style={{
                      color: focused ? '#9846D7' : '#5D5D5D',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    Booking
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Modal"
          component={View}
          options={{
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                // onPress={toggleModal}
                onPress={() => setModalVisible(true)}
                style={{
                  position: 'relative',
                  top: 0,
                  alignItems: 'center',
                  backgroundColor: '#5F91B9',

                  borderBottomLeftRadius: 100,
                  elevation: 5,

                  borderBottomEndRadius: 100,
                  height: 30,
                  width: 60,
                }}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#9846D7',
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 5,
                    borderColor: '#ffffff',
                    marginTop: -30,
                  }}>
                  <Text style={{color: 'white', fontSize: 24}}>+</Text>
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name={'Notification'}
          component={Notification}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    height: 80,
                    width: 70,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* <Image
                                style={{
                                    tintColor: focused ? '#F3691C' : '#999999',
                                    width:24,
                                    height:24
                                }}
                                source={Imagepath.Notification} /> */}
                  {focused ? <NotificationClose /> : <NotificationOpen />}
                  <Text
                    style={{
                      color: focused ? '#9846D7' : '#5D5D5D',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    Notification
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={'Profile'}
          component={Profile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    height: 80,
                    width: 80,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* <Image
                                style={{
                                    tintColor: focused ? '#F3691C' : '#999999',
                                    width:24,
                                    height:24
                                }}
                                source={Imagepath.Profile} /> */}
                  {focused ? <ProfileClose /> : <ProfilOpen />}
                  <Text
                    style={{
                      color: focused ? '#9846D7' : '#5D5D5D',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    Profile
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        //  onRequestClose={toggleModal(false)}
        onPress={() => setModalVisible(true)}>
        <View
          style={{
            height: '100%',
            marginTop: 'auto',
            position: 'relative',
            backgroundColor: '#D1D1D599',
            zIndex: 999999,
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 20,
              right: 20,
              height: '36%',
              backgroundColor: '#ffffff',
              padding: 20,
              top: '35%',
              borderRadius: 24,
              borderWidth: 1,
              borderColor: '#D1D1D1',
            }}>
            <View style={StylesGloble.marginscreen}>
              <TouchableOpacity
                style={{flexDirection: 'row', justifyContent: 'space-between'}}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('OnlineService');
                }}>
                <Text style={StylesGloble.font16500b000000}>
                  Online Service
                </Text>

                <Image
                  style={{height: 24, width: 24}}
                  source={Imagepath.EathGroup}
                />
              </TouchableOpacity>

              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#D1D1D1',
                  marginTop: 20,
                }}
              />

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 20,
                }}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('OfflineService');
                }}>
                <Text style={StylesGloble.font16500b000000}>
                  Offline Service
                </Text>
                <Image
                  style={{height: 24, width: 24}}
                  source={Imagepath.Earthcut}
                />
              </TouchableOpacity>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#D1D1D1',
                  marginTop: 20,
                }}
              />

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 20,
                }}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('TravelBooking');
                }}>
                <Text style={{...StylesGloble.font16500b000000}}>
                  Travel Booking
                </Text>
                <Image
                  style={{height: 24, width: 24}}
                  source={Imagepath.BokingArrow}
                />
              </TouchableOpacity>

              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#D1D1D1',
                  marginTop: 20,
                }}
              />

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 20,
                }}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('PassportApplication');
                }}>
                <Text style={{...StylesGloble.font16500b000000}}>
                Passport Application
                </Text>
                <Image
                  style={{height: 24, width: 24}}
                  source={Imagepath.passport}
                />

              </TouchableOpacity>
             
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default BottomTab;
