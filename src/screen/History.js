import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as StringCommon from '../common/StringCommon';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button} from 'react-native-paper';
export default function History({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <SafeAreaView>
      <Header
        setModalVisible={(bool) => {
          setModalVisible(bool);
        }}
        navigation={navigation}
      />
      <ScrollView>
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </ScrollView>
      <Modal
        visible={modalVisible}
        animationType="slide"
        style={{flex: 1, backgroundColor: 'white'}}>
        <SafeAreaView>
          <HeaderModal
            setModalVisible={(bool) => {
              setModalVisible(bool);
            }}
            navigation={navigation}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginLeft: 10,
              alignItems: 'center',
            }}>
            <Text style={{marginRight: 20}}>Ngay : </Text>
            <Text
              onPress={() => {
                setShowDatepicker(true);
              }}>
              {formatDate(date)}
            </Text>
            <Icon name="calendar-alt" style={{marginLeft: 10}} />
          </View>
          <TextInput
            style={{marginTop: 20, marginLeft: 10}}
            placeholder="Noi dung"
          />
          {showDatepicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              is24Hour={true}
              display="inline"
              onChange={(event, selectedDate) => {
                let date = new Date(selectedDate.getTime());

                setDate(formatDate(date));
                console.log(formatDate(date));
                setShowDatepicker(false);
              }}
            />
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

function Header({setModalVisible, navigation}) {
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',

        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
      }}>
      <TouchableOpacity
        style={{
          height: 50,
          justifyContent: 'center',
          width: 40,
        }}
        onPress={() => {
          navigation.navigate(StringCommon.CardDetailsScreen);
        }}>
        <Icon
          name="arrow-left"
          size={20}
          color="gray"
          style={{marginLeft: 10}}
        />
      </TouchableOpacity>
      <Text style={{flex: 1}}>Note</Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          marginRight: 15,
          flexDirection: 'row',
        }}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text>Mat sau</Text>
        <Icon name="plus" size={20} color="blue" style={{marginLeft: 10}} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          marginRight: 5,
          flexDirection: 'row',
        }}>
        <Text>Mat truoc</Text>
        <Icon name="plus" size={20} color="blue" style={{marginLeft: 10}} />
      </TouchableOpacity>
    </View>
  );
}

function HeaderModal({setModalVisible, navigation}) {
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',

        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
      }}>
      <TouchableOpacity
        style={{
          height: 50,
          justifyContent: 'center',
        }}
        onPress={() => {
          setModalVisible(false);
        }}>
        <Text
          style={{
            fontSize: 17,
            color: 'red',
            fontWeight: '600',
            marginLeft: 15,
          }}>
          Cancel
        </Text>
      </TouchableOpacity>
      <Text style={{flex: 1, textAlign: 'center'}}>Create History</Text>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          marginRight: 15,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 17,
            color: 'blue',
            fontWeight: '600',
            marginRight: 15,
          }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function HistoryItem() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      }}>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={{fontWeight: '600'}}>Mat truoc</Text>
        <Text style={{marginLeft: 20, color: 'gray'}}>2020-21-11</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{margin: 10}}>Noi dung :</Text>
        <Text style={{margin: 10}}>Tesst </Text>
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={{fontWeight: '600'}}>Mat sau</Text>
        <Text style={{marginLeft: 20, color: 'gray'}}>2020-21-11</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{margin: 10}}>Noi dung :</Text>
        <Text style={{margin: 10}}>Tesst </Text>
      </View>
    </View>
  );
}
function formatDate(date) {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  return [day, month, year].join('/');
}
