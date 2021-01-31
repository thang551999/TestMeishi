import React, {useEffect, useState} from 'react';
import {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Animated,
  TouchableOpacity,
  Linking,
} from 'react-native';
import * as Constant from '../common/Constant';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export default function CardDetails({route, navigation}) {
  console.log(route.params);

  const scrollY = useRef(new Animated.Value(0)).current;
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  return (
    <View style={{flex: 1}}>
      {/* <Animated.View style={{marginTop: headerHeight}}>
        <Text>askjdklj</Text>
      </Animated.View> */}
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}>
        <Image
          style={{height: 220, width: Constant.windowWidth * 10}}
          source={require('../asset/image/ImageCardTest/100092.jpeg')}
          resizeMode="contain"
        />

        <View
          style={{
            margin: 10,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Name />
            <Company />
          </View>
          <View style={{alignItems: 'center'}}>
            <Jobtitle />
          </View>
          <Footer />
        </View>
        <View
          style={{
            flex: 1,
            margin: 10,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
            borderRadius: 10,
          }}>
          <Phone />
          <Email />
          <Address />
          <WebSite />
          <Note />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

function Phone() {
  return (
    <View style={{height: 60}}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon
          name="phone-alt"
          size={20}
          color="gray"
          style={{marginRight: 30}}
        />
        <View>
          <Text style={{color: 'blue'}}>092255199</Text>
          <Text style={{color: 'gray', marginTop: 5}}>Phone</Text>
        </View>
      </View>
    </View>
  );
}
function Name() {
  return (
    <View style={{height: 60}}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon style={{marginRight: 10}} name="user" size={20} color="black" />
        <View>
          <Text style={{fontWeight: '700', fontSize: 20}}>ThangDp</Text>
          <Text style={{color: 'gray'}}>UserName</Text>
        </View>
      </View>
    </View>
  );
}
function Company() {
  return (
    <View style={{height: 60}}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon
          style={{marginRight: 10}}
          name="building"
          size={20}
          color="black"
        />
        <View>
          <Text style={{fontWeight: '700', fontSize: 20}}>NSMV</Text>
          <Text style={{color: 'gray'}}>Company</Text>
        </View>
      </View>
    </View>
  );
}
function Jobtitle() {
  return (
    <View style={{height: 60}}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon style={{marginRight: 10}} name="user-md" size={20} color="gray" />
        <View>
          <Text style={{fontWeight: '700', fontSize: 20}}>Dev</Text>
          <Text style={{color: 'gray'}}>Job title</Text>
        </View>
      </View>
    </View>
  );
}
function Email() {
  return (
    <View style={{height: 60}}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon
          name="envelope-open"
          size={20}
          color="gray"
          style={{marginRight: 30}}
        />
        <View>
          <Text style={{color: 'blue'}}>thang.dp@gmail.com</Text>
          <Text style={{color: 'gray', marginTop: 5}}>Email</Text>
        </View>
      </View>
    </View>
  );
}
function Address() {
  return (
    <View style={{height: 60}}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon
          name="map-marker-alt"
          size={20}
          color="gray"
          style={{marginRight: 30}}
        />
        <View>
          <Text>15 DUy Tan</Text>
          <Text style={{color: 'gray', marginTop: 5}}>Location</Text>
        </View>
      </View>
    </View>
  );
}
function WebSite() {
  return (
    <View style={{height: 60}}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name="web"
          size={20}
          color="gray"
          style={{marginRight: 30}}
        />
        <View>
          <Text style={{color: 'blue'}}>NSMV.com</Text>
          <Text style={{color: 'gray', marginTop: 5}}>WebSite</Text>
        </View>
      </View>
    </View>
  );
}
function Note() {
  return (
    <View style={{height: 60}}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name="note-multiple-outline"
          size={20}
          color="gray"
          style={{marginRight: 30}}
        />
        <View>
          <Text>Hoi Kem </Text>
          <Text style={{color: 'gray', marginTop: 5}}>Note</Text>
        </View>
      </View>
    </View>
  );
}
function Footer() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#448bff',
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            borderRadius: 20,
          }}>
          <Icon name="clipboard" color="white" size={20} />
        </View>
        <Text>History</Text>
      </View>

      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={() => {
          let phoneNumber = `telprompt:0922255199`;
          Linking.canOpenURL(phoneNumber)
            .then((supported) => {
              if (!supported) {
                Alert.alert('Phone number is not available');
              } else {
                return Linking.openURL(phoneNumber);
              }
            })
            .catch((err) => console.log(err));
        }}>
        <View
          style={{
            backgroundColor: '#f1b30c',
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            borderRadius: 20,
          }}>
          <Icon name="phone-alt" color="white" size={20} />
        </View>
        <Text>Phone</Text>
      </TouchableOpacity>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#9fc826',
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            borderRadius: 20,
          }}>
          <Icon name="paper-plane" color="white" size={20} />
        </View>
        <Text>Mail</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#27b2a6',
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            borderRadius: 20,
          }}>
          <Icon name="pencil-alt" color="white" size={20} />
        </View>
        <Text>Edit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
