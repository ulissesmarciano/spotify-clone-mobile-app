import React from "react";
import { View, StyleSheet } from "react-native";

const colorDefault = '#rgb(18, 18, 18)';

const BottomSection = () => {
    return (
        <View style={styles.container} />
    );
};

export default BottomSection;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgrondColor: colorDefault,
        height: 80,
    }
});