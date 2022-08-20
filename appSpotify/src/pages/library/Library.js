import React from "react";
import { View, Text } from "react-native";

const colorDefault = '#rgb(18, 18, 18)';

const Library = () => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 40 }}>Library!</Text>
        </View>
    );
};

export default Library;

