import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from "./pages/home/Home.js";
import Library from "./pages/library/Library.js"
import Search from "./pages/search/Search.js"


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/> 
                <Stack.Screen name="Search" component={Search}/>
                <Stack.Screen name="Library" component={Library}/>             
            </Stack.Navigator>
        </NavigationContainer>
    );
};

