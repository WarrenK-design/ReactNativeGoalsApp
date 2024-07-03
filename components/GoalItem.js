import { StyleSheet, Text } from "react-native";

export default function GoalItem(props) {
   return (
        <Text style={styles.goalTextStyle}>
                {props.text}
        </Text>
   ) 
}

const styles = StyleSheet.create({
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
        backgroundColor: '#5e0acc',
        color: 'white'
  }
})