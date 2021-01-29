import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {Button} from 'react-native-paper';

import {TouchableOpacity} from 'react-native-gesture-handler';
import * as CallApi from '../action/CallApi';
import {windowWidth} from '../common/Constant';
import * as StringCommon from '../common/StringCommon';
import AlertCusstom from '../component/AlertCusstom';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {Button} from '../component/index';
export default function LoginScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [isloading, setLoading] = useState(false);
  const login = async (user, password, navigation) => {
    let res = new Object();
    // res.authenticationToken = '';
    console.log(res, 222);
    console.log(user, password);
    res = await CallApi.login(user, password);
    console.log(res, 111);

    if (res.authenticationToken === undefined) {
      navigation.navigate('Home');
      setLoading(false);
      setUserName('');
      setPassWord('');
    } else {
      setLoading(false);
      let action = [
        {
          text: 'OK',
          onPress: () => {},
        },
      ];
      AlertCusstom(
        StringCommon.Alert,
        StringCommon.WrongPasswordOrUsername,
        action,
      );
    }
  };
  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView style={{flex: 1}} enabled behavior={'padding'}>
        <ImageBackground
          style={{flex: 1}}
          source={{
            uri:
              'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          }}
          resizeMode="cover">
          <View style={style.logoContainor}></View>
          <View style={style.fontLogin}>
            <View style={style.TextInput}>
              <Image
                source={require('../asset/icon/username.png')}
                style={{height: 30, width: 30, marginHorizontal: 10}}></Image>
              <TextInput
                value={userName}
                editable={!isloading}
                style={{flex: 1, height: 45}}
                placeholder="UserName"
                keyboardType="twitter"
                onChangeText={(text) => setUserName(text)}
              />
            </View>
            <View style={style.TextInput}>
              <Image
                style={{height: 30, width: 30, marginHorizontal: 10}}
                source={require('../asset/icon/password.png')}></Image>
              <TextInput
                value={passWord}
                editable={!isloading}
                style={{flex: 1, height: 45}}
                keyboardType="twitter"
                placeholder="PassWord"
                secureTextEntry={showPass}
                onChangeText={(text) => setPassWord(text)}
              />
              {passWord === '' ? (
                <View></View>
              ) : (
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                  <Icon
                    name={showPass === false ? 'eye-slash' : 'eye'}
                    size={25}
                    style={{marginRight: 10}}
                  />
                </TouchableOpacity>
              )}
            </View>

            <Button
              style={style.Button}
              mode="contained"
              loading={isloading}
              onPress={async () => {
                await setLoading(true);
                await login(userName, passWord, navigation);
              }}>
              Login
            </Button>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  fontLogin: {
    flex: 1,
    alignItems: 'center',
  },
  TextInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    width: 8 * windowWidth,
    marginHorizontal: 50,
    marginVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    height: 45,
  },
  Button: {
    opacity: 1,
    height: 50,
    width: 150,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#7092BE',
  },
  logoContainor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
