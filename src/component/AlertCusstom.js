import React from 'react';
import {View, Text, Alert} from 'react-native';
import * as StringCommon from '../common/StringCommon';
export default function AlertCusstom() {
  // button laf truyeenf vao kieu
  //button : [ ]

  //   return Alert.alert('Label', 'BodyLabel', [
  //     {text: 'o1k', onPress: () => console.log(1)},
  //   ]);
  return Alert.alert(StringCommon.Alert, StringCommon.WrongPasswordOrUsername, [
    {text: 'Ok'},
  ]);
}
