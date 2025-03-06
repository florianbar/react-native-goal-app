import { useState } from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    TextInput, 
    Button,
    Modal,
    Image,
} from 'react-native';

export default function GoalInput({ isVisible, onAddGoal, onCancel }) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(value) {
        setEnteredGoalText(value);
    }

    function addGoalHandler() {
        if (!enteredGoalText) return;

        onAddGoal(enteredGoalText);

        setEnteredGoalText("");
        onCancel();
    }

    function cancelAddGoalHandler() {
        setEnteredGoalText("");
        onCancel();
    }

    return (
        <Modal 
            visible={isVisible} 
            animationType="fade"
        >
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <Image 
                        source={require('../assets/images/goal.png')} 
                        style={styles.logo}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Type goal here" 
                        value={enteredGoalText}
                        onChangeText={goalInputHandler}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button 
                                title="Cancel" 
                                onPress={cancelAddGoalHandler} 
                            />
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title="Add Goal" 
                                onPress={addGoalHandler} 
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#311b6b',
        padding: 16,
        borderRadius: 20,
        margin: 16,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 16,
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 12,
        marginRight: 8,
        borderRadius: 4,
        fontSize: 16,
        color: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    button: {
        width: '30%',
        marginHorizontal: 4,
    },
});
