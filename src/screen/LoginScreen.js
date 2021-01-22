import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {dimensions, windowWidth} from '../common/Constant';
import {Button} from '../component/index';
export default function LoginScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  console.log(dimensions);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{height: 200, width: 200}}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
      </View>
      <View style={style.fontLogin}>
        <TextInput style={style.TextInput} placeholder="UserName" />
        <TextInput style={style.TextInput} placeholder="PassWord" />
        {/* <Button
          onPress={() => {
            navigation.navigate('Home');
          }}
          title="Login"></Button> */}
        <Button
          title={'Login'}
          style={{width: 200, marginTop: 30}}
          action={() => navigation.navigate('Home')}></Button>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  fontLogin: {
    flex: 1,
    alignItems: 'center',
  },
  TextInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: 7 * windowWidth,
    marginHorizontal: 50,
    marginVertical: 15,
  },
});
