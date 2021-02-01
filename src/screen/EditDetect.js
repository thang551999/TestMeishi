import React, {useEffect, useState} from 'react';
import {useRef} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import * as Constant from '../common/Constant';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as StringCommon from '../common/StringCommon';
import {Button, ProgressBar} from 'react-native-paper';

export default function EditDetect({route, navigation}) {
  const [loadingSave, setloadingSave] = useState(false);
  const [loadingInput, setLoadingInput] = useState(false);

  return (
    <SafeAreaView>
      <View
        style={{
          height: Constant.windowHeight * 1,

          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              backgroundColor: '#497df0',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <MaterialCommunityIcons name="check-bold" size={20} color="white" />
          </View>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              backgroundColor: '#497df0',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}>
            <Text style={{color: 'white', fontWeight: '700'}}>2</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontWeight: '600'}}>Confirm Text</Text>
          </View>
        </View>
      </View>
      <ProgressBar progress={0.8} color={'#497df0'} />

      <ScrollView>
        <Image
          style={{height: 220, width: Constant.windowWidth * 10}}
          source={require('../asset/image/ImageCardTest/100092.jpeg')}
          resizeMode="contain"
        />

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
          <Name />
          <Company />
          <Jobtitle />
          <Phone />
          <Email />
          <Address />
          <WebSite />
          <Note />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 3,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Button
            loading={loadingSave}
            mode="contained"
            onPress={() => {
              setloadingSave(true);
              setTimeout(() => {
                navigation.navigate(StringCommon.HomeScreen);
              }, 2000);
            }}>
            Send To Input
          </Button>
          <Button
            loading={loadingInput}
            mode="contained"
            onPress={() => {
              setLoadingInput(true);
              setTimeout(() => {
                navigation.navigate(StringCommon.HomeScreen);
              }, 2000);
            }}>
            Save
          </Button>
        </View>
        <View style={{height: Constant.windowHeight + 30}}></View>
      </ScrollView>
    </SafeAreaView>
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
          <TextInput>092255199</TextInput>
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
        <Icon style={{marginRight: 30}} name="user" size={20} color="black" />
        <View>
          <TextInput>thangdp</TextInput>
          <Text style={{color: 'gray', marginTop: 5}}>name</Text>
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
          style={{marginRight: 30}}
          name="building"
          size={20}
          color="black"
        />
        <View>
          <TextInput>NSMV</TextInput>
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
        <Icon style={{marginRight: 30}} name="user-md" size={20} color="gray" />
        <View>
          <Text>Dev</Text>
          <TextInput style={{color: 'gray'}}>Job title</TextInput>
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
          <TextInput>thang.dp@gmail.com</TextInput>
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
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('http://nsmv.com.vn/');
          }}>
          <Text style={{color: 'blue'}}>http://nsmv.com.vn</Text>
          <Text style={{color: 'gray', marginTop: 5}}>WebSite</Text>
        </TouchableOpacity>
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
function Footer({navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Button
        loading={loadingSave}
        mode="contained"
        onPress={() => navigation.navigate(StringCommon.HomeScreen)}>
        Send To Input
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate(StringCommon.HomeScreen)}>
        Save
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
