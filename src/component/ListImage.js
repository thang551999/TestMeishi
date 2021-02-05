import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {windowHeight, windowWidth} from '../common/Constant';
import Icon from 'react-native-vector-icons/FontAwesome5';
const ListImage = () => {
  // source={require('../asset/image/ImageCardTest/100092.jpeg')}
  const [active, changactive] = useState(0);
  const Data = [
    require('../asset/image/ImageCardTest/100092.jpeg'),
    require('../asset/image/ImageCardTest/100099.jpg'),
  ];
  return (
    <View style={{height: windowHeight * 3, width: windowWidth * 10}}>
      <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={({nativeEvent}) => {
          let a = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
          );

          if (a !== active) {
            changactive(a);
          }
        }}>
        {/* <Image
        source={require('../asset/image/ImageCardTest/100092.jpeg')}
        style={{height: windowHeight * 3, width: windowWidth * 10}}
      />
      <Image
        source={require('../asset/image/ImageCardTest/100099.jpg')}
        style={{height: windowHeight * 3, width: windowWidth * 10}}
      /> */}

        {Data.map((item) => {
          return (
            <Image
              source={item}
              style={{height: windowHeight * 3, width: windowWidth * 10}}
            />
          );
        })}
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          right: windowWidth * 5 - 15,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginHorizontal: 10,
            color: active === 0 ? 'skyblue' : 'gray',
            fontSize: 12,
          }}
          color="gray">
          ●
        </Text>
        <Text style={{color: active === 1 ? 'skyblue' : 'gray', fontSize: 12}}>
          ●
        </Text>
      </View>
    </View>
  );
};

export default ListImage;

const styles = StyleSheet.create({});
