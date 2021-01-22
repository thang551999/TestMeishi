/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {Text, useWindowDimensions} from 'react-native';
import {
  LoginScreen,
  HomeScreen,
  SettingScreen,
  LogoutScreen,
} from './src/screen/index';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
const StackRoot = createStackNavigator();
const StackHome = createStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerHome = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      edgeWidth={50}
      hideStatusBar={true}
      overlayColor={0}
      drawerStyle={{
        width: 240,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackHome1} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const StackHome1 = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={{gestureEnabled: false, headerShown: false}}
      />
    </StackHome.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackRoot.Navigator initialRouteName="Login">
        <StackRoot.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <StackRoot.Screen
          name="Home"
          component={DrawerHome}
          options={{gestureEnabled: false, headerShown: false}}
        />
      </StackRoot.Navigator>
    </NavigationContainer>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Text>sldklasjd</Text>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
    </DrawerContentScrollView>
  );
}
