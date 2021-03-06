import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import React from 'react';
import {Button, FlatlistComponent, HeaderHome} from '../component';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as StringCommon from '../common/StringCommon';

export default function HomeScreen({navigation}) {
  console.log(1234567);
  return (
    <View style={{flex: 1}}>
      <StatusBar />

      <SafeAreaView style={{backgroundColor: '#7092BE', flex: 1}}>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          }}
          style={StyleSheet.absoluteFillObject}
          blurRadius={18}
        />
        <HeaderHome navigation={navigation} />

        <FlatlistComponent navigation={navigation} />
        <TouchableOpacity
          style={styles.buttonupload}
          onPress={() => {
            navigation.navigate(StringCommon.UploadScreen);
          }}>
          <Icon name="camera" size={25} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
const Data = [
  {
    name: 'test1',
    id: 1,
    image: '',
  },
];
const styles = StyleSheet.create({
  buttonupload: {
    position: 'absolute',
    backgroundColor: 'lightskyblue',
    right: 0,
    bottom: 15,
    height: 60,
    width: 60,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
