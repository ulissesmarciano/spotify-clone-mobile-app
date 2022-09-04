/*
PENDÊNCIAS: iniciar sempre que clicar no bottom button a página ExplorerScreen. 
Quando inicio e navego a página ExplorerStackScreen ela fica aberta.

*/

import React from "react";
import { View, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from "./pages/home/Home.js";
import Library from "./pages/library/Library";
import LibraryPlace from "./pages/library/subpages/libraryplace/libraryplace.js";
import Explorer from "./pages/search/Explorer.js";
import SearchPlaceSection from "./pages/search/subpages/searchplace/searchplace.js";

import TrackPlayer from "./pages/players/trackplayer/trackplayer.js";
import PodcastPlayer from "./pages/players/podcastplayer/podcastplayer.js";

import ArtistScreen from "./pages/listscreens/artist/artist.js";
import AlbumScreen from "./pages/listscreens/album/album.js";


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

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return(
  <HomeStack.Navigator>
    <HomeStack.Screen 
    name="Home"
    component={HomeScreen}
    options={{
      title: ' ',
      headerTransparent: true,
      headerBackTitleVisible: false,
    }}
    />

    <HomeStack.Screen 
    name="Track Player"
    component={TrackPlayer}
    options={{
      title: ' ',
      headerTransparent: true,
      headerBackVisible: false,     
    }}
    />

    <HomeStack.Screen 
    name="Podcast Player"
    component={PodcastPlayer}
    options={{
      title: ' ',
      headerTransparent: true,
      headerBackVisible: false,     
    }}
    />

    <HomeStack.Screen 
    name="Artist Screen"
    component={ArtistScreen}    
    options={{
      title: ' ',
      headerTransparent: true,
      headerBackVisible: true,
      headerTintColor: 'white',
      
    }}
    />

    <HomeStack.Screen 
    name="Album Screen"
    component={AlbumScreen}
    options={{
      title: ' ',
      headerTransparent: true,
      headerTintColor: 'white',
      
    }}
    />
  </HomeStack.Navigator>
  );
};

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


const LibraryStack = createNativeStackNavigator();

function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator>      
      <LibraryStack.Screen 
      name="Biblioteca"
      component={LibraryScreen}
      options={{
        title: ' ',
        headerTransparent: true,
        headerBackVisible: false,         
      }}  
      />
      <LibraryStack.Screen 
      name="Detalhes" 
      component={LibraryPlace}      
      options={{
        title: ' ',
        headerTransparent: true,
        headerBackVisible: false,         
      }}  
      />  
    </LibraryStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer >     
      <Tab.Navigator
          screenOptions={() => ({    
              tabBarHideOnKeyboard:true,
              tabBarVisibilityAnimationConfig: false,              
              headerShown: false,
              tabBarStyle: {
                height: 50,
                paddingHorizontal: 1,
                backgroundColor: 'rgba(1, 1, 1, 0.9)',
                position: 'absolute',
                borderTopWidth: 0,                              
              },
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "#rgb(177, 177, 177)",
              tabBarLabelStyle: {
                fontSize: 12,
              },
          })} 
          
          >
      <Tab.Screen
              name="Início"
              component={HomeStackScreen}
              options={{                    
                  tabBarIcon: ({focused}) => (
                    <View>
                      <Image source={focused ? require('./components/icons/homeselected.png') : require('./components/icons/home.png')}
                      resizeMode="contain" 
                      style={{
                        width: 22,
                        height: 22,
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
                    <Image source={focused ? require('./components/icons/searchselected.png') : require('./components/icons/search.png')}
                    resizeMode="contain"
                    style={{
                      width: 22,
                      height: 22,
                    }}                        
                      />
                  </View>
                ),   
              }}
                              
          />
        <Tab.Screen
              name="Sua Biblioteca"
              component={LibraryStackScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <View>
                    <Image source={focused ? require('./components/icons/libsselected.png') : require('./components/icons/libs.png')}
                    resizeMode="contain"
                    style={{
                      width: 22,
                      height: 22,
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