import React, {useRef} from 'react';
import {Text, View, StyleSheet, FlatList, Animated} from 'react-native';

import CardItemListView from './CardItemListView';

const FlatlistComponent = ({navigation}) => {
  const scroolY = useRef(new Animated.Value(0)).current;

  let DATA = dummydata(Data[0]);
  return (
    <Animated.FlatList
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scroolY}}}], {
        useNativeDriver: true,
      })}
      data={DATA}
      renderItem={(item, index) => {
        return (
          <CardItemListView
            item={item.item}
            index={item.index}
            scroolY={scroolY}
            navigation={navigation}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

const Data = [
  {id: 10, image: '', name: 'Test1', compamy: 'NSMV', jobtitle: 'Developer'},
];
function dummydata(obj) {
  let arr = [obj];
  let a = new Object();
  for (let i = 0; i < 30; i++) {
    arr[i] = new Object();
    arr[i].id = i;
    arr[i].image = '';
    arr[i].name = 'Test1' + i;
    arr[i].compamy = 'NSMV' + i;
    arr[i].jobtitle = 'Develo11111111111111111111per';
  }
  return arr;
}
export default FlatlistComponent;
