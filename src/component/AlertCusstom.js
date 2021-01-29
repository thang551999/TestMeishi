import React from 'react';
import {View, Text, Alert} from 'react-native';
import * as StringCommon from '../common/StringCommon';
export default function AlertCusstom(Label, BodyLabel, ButtonAcction) {
  // button laf truyeenf vao kieu
  // button : [ ]
  console.log(ButtonAcction);
  return Alert.alert(Label, BodyLabel, ButtonAcction);
}
