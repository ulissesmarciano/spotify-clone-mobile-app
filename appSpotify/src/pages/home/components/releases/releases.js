import React from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';


const DATA = [
  {
    id: 1,
    title: 'Confira os lançamentos do...',
    subtitle: 'Playlist',
  },
  {
    id: 2,
    title: 'Música',
    subtitle: 'Single - Album',
  },
  {
    id: 3,
    title: 'Confira os lançamentos do...',
    subtitle: 'Playlist',
  },

  {
    id:4,
    title: 'Confira os lançamentos do...',
    subtitle: 'Playlist',
  },

  {
    id:5,
    title: 'Música',
    subtitle: 'Single - Album',
  },

  {
    id:6,
    title: 'Música',
    subtitle: 'Single - Album',
  },

  {
    id:7,
    title: 'Música',
    subtitle: 'Single - Album',
  },

  {
    id:8,
    title: 'Música',
    subtitle: 'Single - Album',
  },
  
];

const Item = ({ title }) => {
  const navigator = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Playlist Screen")}>
      <LinearGradient style={S.itemScreen2} colors={['#9dff00', '#182600']}>
          <Text style={S.textImageStyle}>L</Text>
      </LinearGradient>
      <Text style={S.title2}>{title}</Text>
    </TouchableOpacity>
  );
};

const Item2 = ({ title, subtitle }) => {
  const navigator = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Track Player")}>
      <LinearGradient style={S.itemScreen2} colors={['#ff2a26', '#5e0200']}>
          <Text style={S.textImageStyle}>M</Text>
      </LinearGradient>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const NewReleasesSection = () => {
    const renderItem = ({ item }) => {
      if(item.title == 'Música'){
        return <Item2 title={item.title} subtitle={item.subtitle}/>
      } else return <Item title={item.title} subtitle={item.subtitle}/>
    };

    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Novos lançamentos para você</Text>        
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

export default NewReleasesSection;