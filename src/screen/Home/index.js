import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Imagepath from '../../constant/Imagepath';
import Search from '../../assest/svg/Search.svg';
import Message from '../../assest/svg/Message.svg';
import LoadingPage from '../../helper/LoadingPage';
import ApiserviceService from '../../services/Apiservice.service';
import {useDispatch, useSelector} from 'react-redux';
import {setHomeData} from '../../redux/index';




const Home = ({navigation, props}) => {
  const [Loading, setLoading] = useState(false);
 
  const dispatch = useDispatch();
  const Homestate = useSelector(state => state.HomeReducer.data);
  console.log('Homestate----------->', Homestate);

  useEffect(() => {
    dispatch(setHomeData());
  }, []);

  return (

    <>
    {Loading && (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 999999,
        }}>
        <LoadingPage />
      </View>
    )}
   
    <View style={StylesGloble.container}>

  <ImageBackground
        imageStyle={{
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          alignSelf: 'center',
        }}
        style={{height: 180, width: '100%'}}
        source={Imagepath.SeviceGroup}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            flex: 1,
          }}>
          <View>
            <Text style={StylesGloble.fon24700FFFFFF}>Let’s find your</Text>
            <Text style={StylesGloble.fon24700FFFFFF}>best Services</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
            <Message />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={StylesGloble.marginscreen}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderColor: '#E7E7E7',
            borderRadius: 8,
            height: 46,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            marginTop: -23,
          }}>
          <Search />

          <TextInput
            style={{
              paddingLeft: 10,
              width: '90%',
              fontSize: 12,
              fontWeight: '400',
            }}
            placeholder="Search anything...."
            placeholderTextColor={'#6D6D6D'}
          />
        </View>

        <FlatList
          style={{marginBottom: '80%'}}
          data={[{name: 'abcd'}]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <>
              <View style={{marginTop: 20}}>
                <Text style={StylesGloble.font20700000000}>Services</Text>
              </View>

              <FlatList
                data={Homestate}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ServiceDetails')}>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: '#D1D1D1',
                        backgroundColor: '#FFFFFF',
                        height: 'auto',
                        padding: 15,
                        borderRadius: 10,
                        paddingLeft: 15,
                        paddingRight: 15,
                        marginTop: 20,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 0,
                        }}>
                        <Image
                          style={{
                            height: 45,
                            width: 45,
                            borderColor: '#9846D7',
                            borderWidth: 1,
                            borderRadius: 30,
                          }}
                          // source={{uri: Homestate?.service_image}}
                          source={Imagepath.UserPermit}
                        />
                        <View style={{marginLeft: 10}}>
                          <Text style={StylesGloble.font16600black}>
                            {item?.service_name}
                     
                          </Text>
                          <Text style={styles.textper}>
                            {item?.service_status}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: '#D1D1D1',
                          marginTop: 12,
                        }}
                      />

                      <FlatList
                        data={Homestate}
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => (
                          <>
                            <View style={{paddingLeft: 10}}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  marginTop: 10,
                                }}>
                                <View
                                  style={{
                                    backgroundColor: '#6D6D6D',
                                    height: 5,
                                    width: 5,
                                    borderRadius: 5,
                                  }}
                                />
                                <Text
                                  style={{...styles.namestyl, marginLeft: 10}}>
                                  {item?.service_docs}
                                </Text>
                              </View>
                            </View>
                          </>
                        )}
                      />
                   

                      <View
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: '#D1D1D1',
                          marginTop: 10,
                        }}
                      />

                      <Text style={{...styles.textheadig, marginTop: 10}}>
                        {item?.service_description}
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: '#5D5D5D',
                          }}>
                          Price -
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: '#9846D7',
                          }}>
                          ${item?.price}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </>
          )}
        />
  
      </View>

    </View>
    </>
        
  );
};

const styles = StyleSheet.create({
  textper: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },
  namestyl: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6D6D6D',
  },
  textheadig: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6D6D6D',
    lineHeight: 19,
  },
});

export default Home;
