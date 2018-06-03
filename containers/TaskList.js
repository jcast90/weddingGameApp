import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';
import { List } from 'react-native-elements';

export default class Tasks extends React.Component {
  renderTask(){
    return this.props.tasks.map(item => {
      return(
        <View key={item.id}>
          { this.props.renderTask(item)}
        </View>
      )
      
    })
  }

  render(){
    return(
      <List>
        { this.renderTask() }
      </List>
    )
  }
}