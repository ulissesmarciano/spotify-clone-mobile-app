import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './syled.js';

const DATA = [
    {
      id: 1,
      title: 'Música',
      subtitle: 'Música - Artista',
    },
    {
      id: 2,
      title: 'Nome do Artista',
      subtitle: 'Artista',
    },
    {
      id: 3,
      title: 'Nome da Playlist',
      subtitle: 'Playlist',
    },
    {
      id: 4,
      title: 'Música',
      subtitle: 'Música - Artista',
    },
    {
      id: 5,
      title: 'Nome do Artista',
      subtitle: 'Artista',
    },
    {
      id: 6,
      title: 'Nome da Playlist',
      subtitle: 'Playlist',
    },
    {
      id: 7,
      title: 'Música',
      subtitle: 'Música - Artista',
    },
    {
      id: 8,
      title: 'Nome do Artista',
      subtitle: 'Artista',
    },
    {
      id: 9,
      title: 'Nome da Playlist',
      subtitle: 'Playlist',
    },
    {
      id: 10,
      title: 'Nome do Artista',
      subtitle: 'Artista',
    },
    {
      id: 11,
      title: 'Nome da Playlist',
      subtitle: 'Playlist',
    },
    {
      id: 12,
      title: 'Música',
      subtitle: 'Música - Artista',
    },
    {
      id: 13,
      title: 'Nome do Artista',
      subtitle: 'Artista',
    },
    {
      id: 15,
      title: 'Nome da Playlist',
      subtitle: 'Playlist',
    },
  ];

  const Item = ({ title, subtitle }) => {
    const navigator = useNavigation();
    return( //MÚSICA
      <View style={S.itemContainer}>
          <LinearGradient style={S.itemImage} colors={['#07f576', '#025227']}>
            <Text style={S.textItemImage}>M</Text>
          </LinearGradient>
            <View style={S.itemOrientation} >
              <TouchableOpacity onPress={() => navigator.navigate("Track Player")}>
                <Text style={S.itemTitle}>{title}</Text>
                <Text style={S.itemSubtitle}>{subtitle}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={S.closeButton} source={require('./icons/close.png')}/>
              </TouchableOpacity>
            </View>
      </View>
    )
  };

  const Item2 = ({ title, subtitle }) => {
    const navigator = useNavigation();
    return( //ARTISTA
      <View style={S.itemContainer}>
          <LinearGradient style={S.itemImage2} colors={['#ffdd00', '#635600']}>
            <Text style={S.textItemImage}>A</Text>
          </LinearGradient>
            <View style={S.itemOrientation} >
              <TouchableOpacity onPress={() => navigator.navigate("Artist Screen")}>
                <Text style={S.itemTitle}>{title}</Text>
                <Text style={S.itemSubtitle}>{subtitle}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={S.closeButton} source={require('./icons/close.png')}/>
              </TouchableOpacity>
            </View>
      </View>
    )
  };

  const Item3 = ({ title, subtitle }) => {
    const navigator = useNavigation();
    return( //PLAYLIST
      <View style={S.itemContainer}>
          <LinearGradient style={S.itemImage} colors={['#ee00ff', '#64006b']}>
            <Text style={S.textItemImage}>P</Text>
          </LinearGradient>
            <View style={S.itemOrientation} >
              <TouchableOpacity onPress={() => navigator.navigate("Playlist Screen")}>
                <Text style={S.itemTitle}>{title}</Text>
                <Text style={S.itemSubtitle}>{subtitle}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={S.closeButton} source={require('./icons/close.png')}/>
              </TouchableOpacity>
            </View>
      </View>
    );
  };

const RecentSearchSection = () => {
    const renderItem = ({item}) => {
      if (item.title == "Música"){
        return <Item title={item.title} subtitle={item.subtitle} />
      } else if (item.title == "Nome do Artista" ){
        return <Item2 title={item.title} subtitle={item.subtitle} />
      } else return <Item3 title={item.title} subtitle={item.subtitle} />

    }; 
    return (
        <View>
          <Text style={S.titlePage} >Buscas recentes</Text>
            <FlatList
            data={DATA}
            renderItem={renderItem}
          keyExtractor={item => item.id}
            />
        </View>
    );
};

export default RecentSearchSection;