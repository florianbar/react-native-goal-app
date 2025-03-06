import { 
    StyleSheet, 
    Text,
    View,
    Pressable,
} from 'react-native';

export default function GoalItem({ text, onDeleteGoal }) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color: '#dddddd'}} // android only
                style={({ pressed }) => pressed && styles.pressedItem} // cross-platform
                onPress={onDeleteGoal}
            >
                <Text style={styles.goalItemText}>
                    {text}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
      backgroundColor: '#5e0acc',
      marginBottom: 8,
      borderRadius: 8,
    },
    pressedItem: {
      opacity: 0.5,
    },
    goalItemText: {
      color: '#fff',
      fontSize: 18,
      padding: 14,
    },
});
