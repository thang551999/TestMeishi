import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {windowWidth} from '../common/Constant';
import {Button} from '../component/index';
export default function LoginScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [showPass, setShowPass] = useState(false);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../asset/icon/wallpaper.png')}
        resizeMode="cover">
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30}}>Meishi</Text>
        </View>
        <View style={style.fontLogin}>
          <View style={style.TextInput}>
            <Image
              source={require('../asset/icon/username.png')}
              style={{height: 30, width: 30, marginHorizontal: 10}}></Image>
            <TextInput
              placeholder="UserName"
              onChangeText={(text) => setUserName(text)}
            />
          </View>
          <View style={style.TextInput}>
            <Image
              style={{height: 30, width: 30, marginHorizontal: 10}}
              source={require('../asset/icon/password.png')}></Image>
            <TextInput
              style={{flex: 1}}
              placeholder="PassWord"
              secureTextEntry={showPass}
              onChangeText={(text) => setPassWord(text)}
            />
            {passWord === '' ? (
              <View></View>
            ) : (
              <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                <Image
                  style={{height: 30, width: 30, marginHorizontal: 10}}
                  source={require('../asset/icon/eye_black.png')}></Image>
              </TouchableOpacity>
            )}
          </View>

          <Button
            title={'Login'}
            style={{width: 200, marginTop: 30, borderRadius: 35, height: 55}}
            action={() => login(userName, passWord, navigation)}></Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const login = (user, password, navigation) => {
  if (user == '') {
    navigation.navigate('Home');
  }
};
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
  },
});
