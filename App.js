import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Platform, FlatList } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]); 

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()},
    ])
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
          placeholder='Your Course Goal' 
          onChangeText={goalInputHandler}/>      
        <Button title='Add Goal' 
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goals}
          renderItem={(itemData) => {
            return(
              <Text style={styles.goalTextStyle}>
                {itemData.item.text}
              </Text>
            )
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  }, 
  inputContainer: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 24, 
    borderBottomWidth: 1, 
    borderBlockColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8, 
    padding: 8
  },
  goalsContainer: {
    flex: 5,
    alignContent: 'center',
  }, 
  goalTextStyle: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    overflow: 'hidden',
    marginBottom: 10,
    fontSize: '30rem',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto',
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});
