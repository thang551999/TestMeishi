import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';

import React from 'react';
import {Button, FlatlistComponent, HeaderHome} from '../component';

export default function HomeScreen({route, navigation}) {
  console.log(route.params);
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
