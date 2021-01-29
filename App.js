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
import {Text, useWindowDimensions, View, Image, ScrollView} from 'react-native';
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
import * as StringCommon from './src/common/StringCommon';
import * as Constant from './src/common/Constant';
import CardDetails from './src/screen/CardDetails';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
        width: 8 * Constant.windowWidth,
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
        name={StringCommon.HomeScreen}
        component={HomeScreen}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <StackHome.Screen
        name={StringCommon.CardDetailsScreen}
        component={CardDetails}
        // options={{gestureEnabled: false, headerShown: false}}
      />
    </StackHome.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackRoot.Navigator initialRouteName={StringCommon.LoginScreen}>
        <StackRoot.Screen
          name={StringCommon.LoginScreen}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <StackRoot.Screen
          name={StringCommon.DrawerHome}
          component={DrawerHome}
          options={{gestureEnabled: false, headerShown: false}}
        />
      </StackRoot.Navigator>
    </NavigationContainer>
  );
}

function CustomDrawerContent(props) {
  console.log('App drawer load');
  return (
    <DrawerContentScrollView scrollEnabled={false} {...props}>
      <View style={{flex: 1}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Image
            style={{
              backgroundColor: 'black',
              height: 50,
              width: 50,
              borderRadius: 25,
              marginHorizontal: 10,
            }}
            source={{
              uri:
                'https://images.pexels.com/photos/1684161/pexels-photo-1684161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontWeight: '700', fontSize: 20}}>00626</Text>
            <Text style={{fontSize: 17, marginTop: 5, color: 'gray'}}>
              NSMV
            </Text>
          </View>
        </View>

        <DrawerItem
          label={StringCommon.HomeScreen}
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          activeTintColor="red"
          inactiveTintColor="black"
          icon={() => <Icon name="home" size={30} />}
        />

        <ScrollView style={{height: Constant.windowHeight * 6 + 20}}>
          <Image
            style={{
              backgroundColor: 'black',
              height: 500,
              width: Constant.windowWidth * 7,
              borderRadius: 25,
              marginHorizontal: 10,
            }}
            source={{
              uri:
                'https://images.pexels.com/photos/1684161/pexels-photo-1684161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
        </ScrollView>

        <DrawerItem
          label={StringCommon.DrawerSetting}
          activeTintColor="red"
          inactiveTintColor="black"
          onPress={() => {
            props.navigation.navigate('Setting');
          }}
          icon={({focused, color, size}) => (
            <Image
              source={require('./src/asset/icon/setting.png')}
              // resizeMode="center"
            />
          )}
        />
        <DrawerItem
          label={StringCommon.TitleDrawerLogout}
          onPress={() => {
            props.navigation.navigate('Login');
          }}
          activeTintColor={'blue'}
          inactiveTintColor="skyblue"
          icon={({focused, color, size}) => (
            <MaterialCommunityIcons name="logout" size={30} />
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
}
