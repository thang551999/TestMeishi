import React, {useState} from 'react';
import {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from './Button';

export default function HeaderHome({navigation}) {
  const [isSearch, setIsSearch] = useState(false);
  const textInputSearch = useRef('TextInputSearch');
  return (
    <>
      <View
        style={{
          height: 55,
          // backgroundColor: '#7092BE',
          flexDirection: 'row',
          opacity: 1,
        }}>
        {!isSearch && (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Image source={require('../asset/icon/menu.png')} />
          </TouchableOpacity>
        )}

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            alignItems: 'center',
            borderRadius: 20,
            marginVertical: 10,
          }}
          onPress={() => {
            console.log(1);
            setIsSearch(true);
          }}>
          <Image
            style={{margin: 10, height: 25, width: 25}}
            source={require('../asset/icon/search.png')}
          />
          <TextInput
            onTouchStart={() => {
              console.log(1);
              setIsSearch(true);
            }}
            ref={textInputSearch}
            style={{flex: 1}}
          />
        </View>
        {isSearch && (
          <TouchableOpacity
            style={{justifyContent: 'center', marginRight: 10}}
            onPress={() => {
              setIsSearch(false);
              textInputSearch.current.blur();
            }}>
            <Text style={{color: 'white', fontWeight: '500'}}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
      {isSearch && <SearchOption />}
    </>
  );
}

function SearchOption() {
  return (
    <ScrollView
      horizontal={true}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        flexGrow: 1,
        height: 45,
      }}>
      <View
        style={{
          flex: 1,

          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 30,
            marginHorizontal: 10,
            flexDirection: 'row',
          }}>
          <Text style={{marginLeft: 5}}>Name</Text>
          <Icon
            name="times-circle"
            size={20}
            color="red"
            style={{marginLeft: 7}}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 30,
            marginHorizontal: 10,
            flexDirection: 'row',
          }}>
          <Text style={{marginLeft: 5}}>Email</Text>
          <Icon
            name="check-circle"
            size={20}
            color="green"
            style={{marginLeft: 5}}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 30,
            marginHorizontal: 10,
            flexDirection: 'row',
          }}>
          <Text>Phone</Text>
          <Icon
            name="check-circle"
            size={20}
            color="green"
            style={{marginLeft: 5}}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 30,
            marginHorizontal: 10,
            flexDirection: 'row',
          }}>
          <Text>Adrress</Text>
          <Icon
            name="check-circle"
            size={20}
            color="green"
            style={{marginLeft: 5}}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 30,
            marginHorizontal: 10,
            flexDirection: 'row',
          }}>
          <Text>Web</Text>
          <Icon
            name="check-circle"
            size={20}
            color="green"
            style={{marginLeft: 5}}
          />
        </View>
      </View>
    </ScrollView>
  );
}
