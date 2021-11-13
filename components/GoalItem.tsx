import React, { FC } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface IGoalItemProps {
    goal: {
        id: string;
        value: string;
    };
    onRemoveGoal: (id: string) => void;
}

const GoalItem: FC<IGoalItemProps> = ({ goal, onRemoveGoal }) => {
    const { id, value } = goal;

    return (
        <TouchableOpacity onPress={() => onRemoveGoal(id)}>
            <View style={viewStyle}>
                <Text>{value}</Text>
            </View>
        </TouchableOpacity>
    );
};

const { viewStyle } = StyleSheet.create({
    viewStyle: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#CCC",
        borderColor: "black",
        borderWidth: 1
    }
});

export default GoalItem;
export { GoalItem };
