import {View, Text, Button} from 'react-native';

import React, {useEffect} from 'react';

export default function LogOut({navigation}) {
  useEffect(() => {
    navigation.navigate('Login');
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LogOut Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}
        title="Logout"></Button>
    </View>
  );
}
