import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Imagepath from '../../constant/Imagepath';

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Slidestart');
    }, 3000);
  }, []);
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <View style={styles.container}>
        <Image style={{height: 95, width: 95}} source={Imagepath.Roseicon} />
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Splashscreen;
