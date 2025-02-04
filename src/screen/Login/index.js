import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import TextField from '../../helper/TextField';
import Button from '../../helper/Button';
import Disablebutton from '../../helper/Disablebutton';
import ApiserviceService from '../../services/Apiservice.service';
import Toast from 'react-native-simple-toast';
import LoadingPage from '../../helper/LoadingPage';

const Login = ({navigation}) => {
  const [btndisable, setbtndisable] = useState(false);
  const [keyboardheight, setkeyboardheight] = useState('65%');
  const [loading, setloading] = useState(false);
  const [inputnumber, setInputnumber] = useState({
    value: null,
    message: '',
    isValid: false,
  });
  const isValidPhoneNumber = phone => {
    return /^\d{10}$/.test(phone);
  };
  const validatenumber = _in => {
    try {
      setInputnumber(prev => ({...prev, value: _in}));
      if (!_in) {
        setInputnumber(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter number',
        }));
        setbtndisable(false);
      } else if (!isValidPhoneNumber(_in)) {
        setInputnumber(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter correct phone number',
        }));
        setbtndisable(false);
      } else if (_in.length === 0) {
        setInputnumber(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter number',
        }));
        setbtndisable(false);
      } else {
        setInputnumber(prev => ({...prev, isValid: false, message: ''}));
        setbtndisable(true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setkeyboardheight('45%');
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setkeyboardheight('65%');
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const loginsubmit = () => {
    let body = {
      phone: inputnumber.value,
    };

    setloading(true);
    ApiserviceService.Postapi('auth/login', JSON.stringify(body))
      .then(response => {
        setloading(false);
       
        calltoastmessage(response.data.message);
        if (response.status == 200) {
          navigation.navigate('OtpScreen', {
            mobilenumber: inputnumber.value,
            otp: response.data.data.otp,
          });
        }
      })
      .catch(e => {
        setloading(false);
        console.log('e--------', e);
      });
  };

  const calltoastmessage = data => {
    Toast.showWithGravity(data, Toast.LONG, Toast.BOTTOM);
  };

  return (
    <>
      {loading && (
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
        <View style={StylesGloble.whitescreen}>
          <View style={{...StylesGloble.marginscreen, marginTop: '10%'}}>
            <View style={{alignSelf: 'center', marginTop: 20}}>
              <Text style={StylesGloble.font248009846D7}>Login</Text>
              <Text style={{...StylesGloble.font14500g6D6D6D, marginTop: 10}}>
                Welcome back to the app
              </Text>
            </View>

            <View style={{marginTop: 20}}>
              <TextField
                name={'Phone Number'}
                value={inputnumber.value}
                Placeholder="Enter number"
                type="number"
                sectext="false"
                errorText={inputnumber.message}
                onChangeText={text => {
                  validatenumber(text);
                }}
                maxLength={10}
                multiline={false}
                numberOfLines={1}
              />
            </View>

            <View style={{marginTop: 30}}>
              {btndisable ? (
                <Button label={'Get Otp'} onPress={() => loginsubmit()} />
              ) : (
                <Disablebutton label={'Get Otp'} />
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
