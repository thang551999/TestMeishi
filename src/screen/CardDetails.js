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
} from 'react-native';
import * as Constant from '../common/Constant';
const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export default function CardDetails({route, navigation}) {
  console.log(route.params);
  // vuot len thi Header sau thanh ten va a
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  return (
    <View style={{flex: 1}}>
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
        <View style={{height: 500}}></View>
      </Animated.ScrollView>
      <Animated.View style={{marginTop: headerHeight}}>
        <Text>askjdklj</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({});
