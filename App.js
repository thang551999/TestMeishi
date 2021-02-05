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
import {
  Text,
  useWindowDimensions,
  View,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  LoginScreen,
  HomeScreen,
  SettingScreen,
  EditDetect,
  History,
  EditDetectCard,
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import UploadScreen from './src/screen/UploadScreen';
const StackRoot = createStackNavigator();
const StackHome = createStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerHome = (e) => {
  console.log(e)
  const dimensions = useWindowDimensions();
  try {
    return (
      <Drawer.Navigator
        initialRouteName="HomeDrawer"
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
        {console.log('58')}
        <Drawer.Screen name="HomeDrawer" component={StackHomeComponent} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    );
  } catch (error) {
    console.log(error);
  }
};

const StackHomeComponent = (a) => {
  {
    console.log(a);
  }
  return (
    <StackHome.Navigator initialRouteName={StringCommon.HomeScreen}>
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
      <StackHome.Screen
        name={StringCommon.UploadScreen}
        component={UploadScreen}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <StackHome.Screen
        name={StringCommon.EditDetectScreen}
        component={EditDetect}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <StackHome.Screen
        name={StringCommon.HistoryScreen}
        component={History}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <StackHome.Screen
        name={StringCommon.EditDetailsCard}
        component={EditDetectCard}
        //options={{gestureEnabled: false, headerShown: false}}
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
            {
              console.log('155');
            }
            props.navigation.navigate('HomeDrawer',{});
          }}
          activeTintColor="red"
          inactiveTintColor="black"
          icon={() => <Icon name="home" size={30} />}
        />

        <ScrollView style={{height: Constant.windowHeight * 6, marginTop: 5}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              backgroundColor: 'skyblue',
            }}>
            <TouchableOpacity style={styles.button}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Name</Text>
                <Icon
                  name="arrow-up"
                  size={20}
                  style={{marginLeft: 5}}
                  color="white"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Company</Text>
                <Icon
                  name="arrow-up"
                  size={20}
                  style={{marginLeft: 5}}
                  color="white"
                />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

              borderBottomColor: 'gray',

              borderBottomWidth: 1,
              padding: 3,
            }}>
            <Text>Total</Text>
            <Text>100</Text>
          </TouchableOpacity>
          <ScrollView>
            <Name />
            <Name />
            <Name />
          </ScrollView>
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
const styles = StyleSheet.create({
  button: {
    margin: 2,
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
  },
});
function Name() {
  let s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <View style={{backgroundColor: 'gray'}}>
        <Text style={{padding: 4}}>A</Text>
      </View>
      {s.map((s) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

              borderBottomColor: 'gray',

              borderBottomWidth: 1,
              padding: 3,
            }}>
            <Text>An</Text>
            <Text>1</Text>
          </View>
        );
      })}
    </>
  );
}
