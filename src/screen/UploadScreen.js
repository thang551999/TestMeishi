import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button, ProgressBar, Colors} from 'react-native-paper';
import * as Constant from '../common/Constant';
import * as StringCommon from '../common/StringCommon';
export default function UploadScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView>
      <View
        style={{
          height: Constant.windowHeight * 1,

          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              backgroundColor: '#497df0',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Text style={{fontWeight: '700'}}>1</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontWeight: '600'}}>Upload Image</Text>
          </View>
        </View>
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 30,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
          <Text style={{color: 'gray', fontWeight: '700'}}>2</Text>
        </View>
      </View>
      <ProgressBar progress={0.5} color={'#497df0'} />
      <TouchableOpacity
        onPress={() => {
          launchImageLibrary({mediaType: 'photo'}, (res) => {
            console.log(res);
          });
        }}>
        <View
          style={{
            height: Constant.windowHeight * 3,

            width: Constant.windowWidth * 10 - 40,
            margin: 20,
            borderWidth: 1,
            borderStyle: 'dashed',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../asset/image/ImageCardTest/plus.png')} />
          <Text style={{margin: 10, color: 'gray'}}>Add Image</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          launchCamera({}, (res) => {
            console.log(res);
          });
        }}>
        <View
          style={{
            height: Constant.windowHeight * 3,

            width: Constant.windowWidth * 10 - 40,
            margin: 20,
            borderWidth: 1,
            borderStyle: 'dashed',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../asset/image/ImageCardTest/plus.png')} />
          <Text style={{margin: 10, color: 'gray'}}>Add Image</Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button
          icon="camera"
          mode="contained"
          loading={loading}
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              navigation.navigate(StringCommon.EditDetectScreen);
            }, 1000);
          }}>
          Detect
        </Button>
        <Button
          icon="close-octagon"
          mode="contained"
          onPress={() => navigation.navigate(StringCommon.HomeScreen)}>
          Canel
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
