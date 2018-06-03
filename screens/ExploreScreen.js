import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackNavigator } from "react-navigation";
import TaskList from '../containers/TaskList';
import { ListItem, List } from 'react-native-elements';

const TASKS = [
  {id: '1', name:'Find something.', description: 'Find grandma sitting on a bench', type: 'mulitpleChoice', points: 50},
  {id: '2', name:'Find someone.', description: 'Find grandma sitting on a bench', type: 'mulitpleChoice',points: 500},
  {id: '3', name:'Find a rino.', description: 'Find grandma sitting on a bench', type: 'mulitpleChoice', points: 60},
  {id: '4', name:'Take a picture.', description: 'Find grandma sitting on a bench', type: 'picture', points: 90},
  {id: '5', name:'Do that', description: 'Find grandma sitting on a bench', type: 'picture', points: 580},
  {id: '6', name:'More words', description: 'Find grandma sitting on a bench', type: 'picture', points: 200},
  {id: '8', name:'Omg, let\'s make this already' , description: 'Find grandma sitting on a bench', type: 'picture', points: 30},
  {id: '9', name:'Omg, let\'s make this already' , description: 'Find grandma sitting on a bench', type: 'picture', points: 30},
  {id: '10', name:'Omg, let\'s make this already' , description: 'Find grandma sitting on a bench', type: 'picture', points: 30},
  {id: '11', name:'Omg, let\'s make this already' , description: 'Find grandma sitting on a bench', type: 'picture', points: 30},
  {id: '12', name:'Omg, let\'s make this already' , description: 'Find grandma sitting on a bench', type: 'picture', points: 30}
]
export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
  };
  renderTasks(item){
    return(
      <ListItem
        key={item.id}
        title={item.name}
        subtitle={item.type}
        onPress={() => console.log('pressed')}
      >
    </ListItem>
    )
    
    
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <TaskList
          tasks={TASKS}
          renderTask={this.renderTasks}
        >
      </TaskList>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
