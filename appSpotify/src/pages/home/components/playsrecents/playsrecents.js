import React from "react";
import { SafeAreaView, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import S from './styled.js'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const DATA = [
  {
    id: 1,
    title: 'Theme genre music',
  },
  {
    id: 2,
    title: 'Artista',
  },
  {
    id: 3,
    title: 'Playlist',
  },

  {
    id:4,
    title: 'Artista',
  },

  {
    id:5,
    title: 'Artista',
  },

  {
    id:6,
    title: 'Playlist',
  },

  {
    id:7,
    title: 'Theme genre music',
  },

  {
    id:8,
    title: 'Playlist',
  },
];

const Item = ({ title }) => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigation.navigate("Artist Screen")}>
      <Image style={S.image} source={{uri: imageProfileGithub}}/>      
      <Text style={S.title}>{title}</Text>
    </TouchableOpacity>
    );
};

const Item2 = ({ title }) => {
  const navigation = useNavigation();
  return ( 
    <TouchableOpacity style={S.item} onPress={() => navigation.navigate("Playlist Screen")}>
      <Image style={S.image2} source={{uri: imageProfileGithub }}/>
      <Text style={S.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const Item3 = ({ title }) => {
  const navigation = useNavigation();
  return(
  <TouchableOpacity style={S.item} onPress={() => navigation.navigate("Playlist Screen")}>
    <View style={S.image3Orientation}>
      <Image style={S.image3} source={{uri: imageProfileGithub }}/>
      <Image style={S.image3} source={{uri: imageProfileGithub }}/>
    </View>
    <View style={S.image3Orientation}>
      <Image style={S.image3} source={{uri: imageProfileGithub }}/>
      <Image style={S.image3} source={{uri: imageProfileGithub }}/>
    </View>
    <Text style={S.title}>{title}</Text>
  </TouchableOpacity>
  );
};

const PlayRecentsSection = () => {
    const renderItem = ({ item }) => {
      if (item.title == 'Playlist'){
        return <Item2 title={item.title}/>
      } else if (item.title == 'Theme genre music'){
        return <Item3 title={item.title}/>
      } else return <Item title={item.title}/>        
    };

    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Tocados recentemente</Text>        
        <SafeAreaView style={S.container}>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      </View>
    )
};

export default PlayRecentsSection;