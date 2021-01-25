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
import {Text, useWindowDimensions, View, Image} from 'react-native';
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
      drawerStyle={{
        width: 350,
      }}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 30},
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackHomeComponent} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const StackHomeComponent = () => {
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
      <View style={{height: 100, marginVertical: 20}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Meishi</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              backgroundColor: 'black',
              height: 30,
              width: 30,
              borderRadius: 15,
              marginHorizontal: 10,
            }}
            source={require('./src/asset/icon/username.png')}
          />
          <Text>User Login :006</Text>
        </View>
      </View>

      <DrawerItem
        label="Home"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
        activeTintColor="red"
        inactiveTintColor="black"
        icon={({focused, color, size}) => (
          <Image source={require('./src/asset/icon/home.png')} />
        )}
      />

      <View style={{height: 300}}></View>

      <DrawerItem
        label="Setting"
        activeTintColor="red"
        inactiveTintColor="black"
        onPress={() => {
          props.navigation.navigate('Setting');
        }}
        icon={({focused, color, size}) => (
          <Image source={require('./src/asset/icon/setting.png')} />
        )}
      />
      <DrawerItem
        label="Logout"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
        activeTintColor={'blue'}
        icon={({focused, color, size}) => (
          <Image source={require('./src/asset/icon/logout.png')} />
        )}
      />
    </DrawerContentScrollView>
  );
}
