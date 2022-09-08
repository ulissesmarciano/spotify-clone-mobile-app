import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import S from './styled.js';

const DATA = [
  {
    id: 1,
    title: 'Título da playlist',
    subtitle: 'Playlist',
  },
  {
    id: 2,
    title: 'Grupo de playlists',
    subtitle: 'Playlist',
  },
  {
    id: 3,
    title: 'Título da playlist',
    subtitle: 'Playlist',
  },

  {
    id:4,
    title: 'Título da playlist',
    subtitle: 'Playlist',
  },

  {
    id:5,
    title: 'Grupo de playlists',
    subtitle: 'Playlist',
  },

  {
    id:6,
    title: 'Título da playlist',
    subtitle: 'Playlist',
  },

  {
    id:7,
    title: 'Título da playlist',
    subtitle: 'Playlist',
  },

  {
    id:8,
    title: 'Grupo de playlists',
    subtitle: 'Playlist',
  },
  
];

const Item = ({ title, subtitle }) => {
  const navigator = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Playlist Screen")}>
      <LinearGradient style={S.itemScreen} colors={['#fcf642', '#960080']}>
        <Text style={S.textImageStyle}>P</Text>
      </LinearGradient>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  )
};

const Item2 = ({ title, subtitle }) => {
  const navigator = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Playlist Screen")}>
      <View style={S.imageOrientation}>
        <LinearGradient style={S.itemScreen2} colors={['#29ffea', '#020a21']}>
          <Text style={S.textImageStyle}>P</Text>
        </LinearGradient>
        <LinearGradient style={S.itemScreen2} colors={['#30ff29', '#032102']}>
          <Text style={S.textImageStyle}>P</Text>
        </LinearGradient>
        </View>
        <View style={S.imageOrientation}>
        <LinearGradient style={S.itemScreen2} colors={['#ff9ca4', '#4a0006']}>
          <Text style={S.textImageStyle}>P</Text>
        </LinearGradient>
        <LinearGradient style={S.itemScreen2} colors={['#fcf642', '#4a4400']}>
          <Text style={S.textImageStyle}>P</Text>
        </LinearGradient>
      </View>      
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  )
};

const MyPlaylistsSection = () => {
    const renderItem = ({ item }) => {
      if(item.title == 'Grupo de playlists'){
        return <Item2 title={item.title} subtitle={item.subtitle}/>
      } else return <Item title={item.title} subtitle={item.subtitle}/>
    };

    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Suas playlists</Text>        
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

export default MyPlaylistsSection;