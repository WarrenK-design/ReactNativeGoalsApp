import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Platform } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]); 

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      enteredGoalText,
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
        {goals.map((goal) => <Text style={styles.goalTextStyle} key={goal}>{goal}</Text>)}
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
    overflow: 'hidden',
    marginBottom: 10,
    fontSize: '30rem',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto',
    backgroundColor: '#5DADE2',
    color: 'white'
  }
});
