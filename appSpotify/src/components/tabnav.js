import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";



import Home from "../pages/home/Home.js";
import Library from "../pages/library/Library";

function HomeScreen() {
    return (
      <Home/>
    );
}
  
function SearchScreen() {
return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text style={{color: 'black', fontWeight: 'bold', fontSize: 40 }}>Search!</Text>
  </View>
);
}

function LibraryScreen() {
return (
    <Library />
);
}
  
const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer >
      <Tab.Navigator                    
          screenOptions={() => ({
              headerShown: false,
              tabBarStyle: {
                height: 65,
                paddingHorizontal: 1,
                backgroundColor: 'rgba(1, 1, 1, 0.9)',
                position: 'absolute',
                borderTopWidth: 0,
                
              },

              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "#rgb(177, 177, 177)",
              tabBarLabelStyle: {
                fontSize: 14,
              },
          })} 
          
          >
        <Tab.Screen
              name="Início"
              component={HomeScreen}
              options={{                    
                  tabBarIcon: ({focused}) => (
                    <View>
                      <Image source={focused ? require('./icons/homeselected.png') : require('./icons/home.png')}
                      resizeMode="contain" 
                      style={{
                        width: 25,
                        height: 25,
                      }}                      
                        />
                    </View>
                  ),   
              }}
          />
        <Tab.Screen
              name="Buscar"
              component={SearchScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <View>
                    <Image source={focused ? require('./icons/searchselected.png') : require('./icons/search.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}                        
                      />
                  </View>
                ),   
              }}
                              
          />
        <Tab.Screen
              name="Sua Biblioteca"
              component={LibraryScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <View>
                    <Image source={focused ? require('./icons/libsselected.png') : require('./icons/libs.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}                        
                      />
                  </View>
                ),   
              }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}