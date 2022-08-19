import React from "react";
import { View, StyleSheet } from "react-native";

const colorDefault = '#rgb(18, 18, 18)';

const BottonSection = () => {
    return (
        <View style={styles.container} />
    );
};

export default BottonSection;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgrondColor: colorDefault,
        height: 80,
    }
});