import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { 
  StyleSheet, 
  View,
  ScrollView, 
  FlatList,
  Button,
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([{id: "dsadas", value: "Goal 1"}]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function endAddGoalHandler() {
    setIsModalVisible(false);
  }

  function addGoalHandler(goal) {
    const newGoal = {
      id: uuidv4(),
      value: goal,
    };

    setGoals((currentGoals) => [
      ...currentGoals, 
      newGoal
    ]);
  }

  function deleteGoalHandler(goalId) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button 
        title="Add New Goal" 
        color="#5e0acc" 
        onPress={startAddGoalHandler} 
      />
      <GoalInput 
        isVisible={isModalVisible} 
        onCancel={endAddGoalHandler}
        onAddGoal={(goal) => addGoalHandler(goal)} 
      />
      <View style={styles.goalListContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <GoalItem 
              text={itemData.item.value} 
              onDeleteGoal={() => deleteGoalHandler(itemData.item.id)} 
            />
          )}
        />
        {/* <ScrollView>
          {goals.map((goal) => (
            <GoalItem 
              key={goal.id} 
              text={goal.value} 
            />
          ))}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal: 16,
    flex: 1,
  },
  // inputContainer: {
  //   flex: 1,
  //   marginBottom: 24,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#ccc',
  // },
  goalListContainer: {
    flex: 3,
    paddingTop: 16,
  },
});
