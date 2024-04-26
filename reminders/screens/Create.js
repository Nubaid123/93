import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      event: '',
      date: '',
      time: '',
    };
  }
  saveData = () => {
    alert('The reminder has been saved');
  };
  render() {
    return (
      <View>
       <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            height: 30,
            width: 200,
            alignSelf: 'center',
            marginTop: 30,
            textAlign: 'center',
          }}
          onChangeText={(t) => {
            this.setState({
              event: t,
            });
          }}
          placeholder="Name of the Reminder"
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            height: 30,
            width: 200,
            alignSelf: 'center',
            marginTop: 30,
            textAlign: 'center',
          }}
          onChangeText={(t) => {
            this.setState({
              date: t,
            });
          }}
          placeholder="Date"
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            height: 30,
            width: 200,
            alignSelf: 'center',
            marginTop: 30,
            textAlign: 'center',
          }}
          onChangeText={(t) => {
            this.setState({
              time: t,
            });
          }}
          placeholder="Time"
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'turquoise',
            width: 260,
            height: 50,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
          }}
          onPress={() => {
            this.saveData();
          }}>
          <Text style={{ color: 'white', fontSize: 25, alignSelf: 'center' }}>
            Save?
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
