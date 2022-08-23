import React from 'react';
import { View, FlatList, Text, Image, SafeAreaView } from 'react-native';
import S from './syled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

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
  ];

  const Item = ({ title, subtitle }) => ( //MÚSICA
    <View style={S.itemContainer}>
        <Image style={S.itemImage} source={{uri: mockedImage}}/>
          <View style={S.itemOrientation} >
            <View>
              <Text style={S.itemTitle}>{title}</Text>
              <Text style={S.itemSubtitle}>{subtitle}</Text>
            </View>
            <Image style={S.closeButton} source={require('./icons/close.png')}/>
          </View>
    </View>
  );

  const Item2 = ({ title, subtitle }) => ( //ARTISTA
    <View style={S.itemContainer}>
        <Image style={S.itemImage2} source={{uri: mockedImage}}/>
          <View style={S.itemOrientation} >
            <View>
              <Text style={S.itemTitle}>{title}</Text>
              <Text style={S.itemSubtitle}>{subtitle}</Text>
            </View>
            <Image style={S.closeButton} source={require('./icons/close.png')}/>
          </View>
    </View>
  );

  const Item3 = ({ title, subtitle }) => ( //PLAYLIST
    <View style={S.itemContainer}>
        <Image style={S.itemImage} source={{uri: mockedImage}}/>
          <View style={S.itemOrientation} >
            <View>
              <Text style={S.itemTitle}>{title}</Text>
              <Text style={S.itemSubtitle}>{subtitle}</Text>
            </View>
            <Image style={S.closeButton} source={require('./icons/close.png')}/>
          </View>
    </View>
  );

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
            <FlatList
            data={DATA}
            renderItem={renderItem}
          keyExtractor={item => item.id}
            />
        </View>
    );
};

export default RecentSearchSection;