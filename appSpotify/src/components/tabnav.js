/*
PENDÊNCIAS: iniciar sempre que clicar no bottom button a página ExplorerScreen. 
Quando inicio e navego a página ExplorerStackScreen ela fica aberta.

*/

import React from "react";
import { View, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import Home from "../pages/home/Home.js";
import Library from "../pages/library/Library";
import Explorer from "../pages/search/Explorer.js";
import SearchPlaceSection from "../pages/search/subpages/searchplace/searchplace.js";



function HomeScreen() {
    return (
      <Home/>
    );
}

function ExplorerScreen() {
  return (
    <Explorer />
  );
}


function LibraryScreen() {
return (
    <Library />
);
}

const ExplorerStack = createNativeStackNavigator();

function ExplorerStackScreen() {
  return (
    <ExplorerStack.Navigator>
      <ExplorerStack.Screen      
      name="Explorer" 
      component={ExplorerScreen} 
      options={{
        title: ' ',
        headerTransparent: true,
      }} 
    />
      <ExplorerStack.Screen 
      name="Details" 
      component={SearchPlaceSection}
      options={{
        title: ' ',
        headerTransparent: true,
        headerBackVisible: false,         
      }}  
      />
    </ExplorerStack.Navigator>
  );
}
  
const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer >     
      <Tab.Navigator
          screenOptions={() => ({    
              tabBarHideOnKeyboard:true,
              tabBarVisibilityAnimationConfig: false,              
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
              component={ExplorerStackScreen}
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