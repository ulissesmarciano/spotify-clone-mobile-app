import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";



import Home from "./pages/home/Home.js"



function HomeScreen() {
    return (
      <Home/>
    );
}
  
function SearchScreen() {
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Search!</Text>
    </View>
);
}

function LibraryScreen() {
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Library!</Text>
    </View>
);
}
  
  const Tab = createBottomTabNavigator();
  
  export default function App() {
    return (
      <NavigationContainer >
        <Tab.Navigator         
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                  height: 70,
                  paddingHorizontal: 1,
                  backgroundColor: 'rgba(1, 1, 1, 1)',
                  position: 'absolute',
                  borderTopWidth: 0,
              },
            })} 
            
            >
          <Tab.Screen
                name="Início"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (<Image source={require("./icons/home.png")} style={{width: 30, height: 30}} />)
                }}
            />
          <Tab.Screen
                name="Buscar"
                component={SearchScreen}
                options={{
                    tabBarIcon: () => (<Image source={require("./icons/search.png")} style={{width: 30, height: 30}} />)
                }}
                                
            />
          <Tab.Screen
                name="Sua Biblioteca"
                component={SearchScreen}
                options={{
                    tabBarIcon: () => (<Image source={require("./icons/libs.png")} style={{width: 30, height: 30}} />)
                }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
