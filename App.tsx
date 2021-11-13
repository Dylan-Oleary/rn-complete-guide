import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import { GoalInput, GoalItem } from "./components";

export default function App() {
    const [isAddMode, setIsAddMode] = useState<boolean>(false);
    const [goals, setGoals] = useState<Array<{ id: string; value: string }>>([]);

    const addGoal: (value: string) => void = (value) => {
        setGoals([...goals, { id: Math.random().toString(), value }]);
        setIsAddMode(false);
    };

    const onRemoveGoal: (removeId: string) => void = (removeId) => {
        setGoals((goals) => goals.filter(({ id }) => id !== removeId));
    };

    return (
        <View style={styles.screen}>
            <GoalInput onAddGoal={addGoal} onClear={() => setGoals([])} isAddMode={isAddMode} />
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            <FlatList
                data={goals}
                renderItem={(goal) => <GoalItem goal={goal.item} onRemoveGoal={onRemoveGoal} />}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
