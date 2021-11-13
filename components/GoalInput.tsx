import React, { FC, useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

interface IGoalInputProps {
    isAddMode: boolean;
    onAddGoal: (value: string) => void;
    onClear: Function;
}

const GoalInput: FC<IGoalInputProps> = ({ isAddMode, onAddGoal, onClear }) => {
    const [value, setValue] = useState<string>("");

    return (
        <Modal animationType="slide" visible={isAddMode} style={modalStyle}>
            <View style={createForm}>
                <TextInput
                    onChangeText={setValue}
                    placeholder="Enter Goal"
                    style={viewStyle}
                    value={value}
                />
                <View style={buttonContainer}>
                    <Button
                        title="Add"
                        onPress={() => {
                            setValue("");
                            onAddGoal(value);
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
};

const { buttonContainer, createForm, modalStyle, viewStyle } = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    createForm: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        paddingHorizontal: 30
    },
    modalStyle: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    viewStyle: {
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        width: "80%"
    }
});

export default GoalInput;
export { GoalInput };
