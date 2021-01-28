import React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as StringCommon from '../common/StringCommon';
const CardItemListView = ({item, index, scroolY, navigation}) => {
  const inputreang = [-1, 0, index * 130, (index + 2) * 130];
  const inputreang1 = [-1, 0, index * 130, (index + 1) * 130];
  const opacity = scroolY.interpolate({
    inputRange: inputreang1,
    outputRange: [1, 1, 1, 0],
  });
  const scale = scroolY.interpolate({
    inputRange: inputreang,
    outputRange: [1, 1, 1, 0],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{scale}],
          opacity: opacity,
        },
      ]}>
      <TouchableOpacity
        style={{flexDirection: 'row', flex: 1}}
        onPress={() => {
          navigation.navigate(StringCommon.CardDetailsScreen, {id: 1});
        }}>
        <>
          <Image
            style={{height: 80, width: 150, margin: 20}}
            source={require('../asset/image/ImageCardTest/100092.jpeg')}
          />
          <View
            style={{
              flexDirection: 'column',
              maxWidth: 150,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>{item.name}</Text>
            <Text style={{color: 'gray', marginTop: 10}} numberOfLines={1}>
              {item.compamy}
            </Text>
            <Text style={{color: 'gray', marginTop: 5}} numberOfLines={1}>
              {item.jobtitle}
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Image source={require('../asset/icon/call.png')} />
              <Image
                style={{marginLeft: 10}}
                source={require('../asset/icon/chat.png')}
              />
            </View>
            <Image />
          </View>
        </>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CardItemListView;

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 20,
  },
});
