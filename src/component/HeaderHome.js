import React, {useState} from 'react';
import {useRef} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Button from './Button';

export default function HeaderHome({navigation}) {
  const [isSearch, setIsSearch] = useState(false);
  const textInputSearch = useRef('TextInputSearch');
  return (
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
  );
}
