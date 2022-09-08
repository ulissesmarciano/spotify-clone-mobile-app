import React from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import S from './styled';

const DATA = [
  {
    id: 1,
    title: 'Artista',
  },
  {
    id: 2,
    title: 'Artista',
  },
  {
    id: 3,
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id:4,
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id:5,
    title: 'Artista',
  },

  {
    id:6,
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id:7,
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id:8,
    title: 'Artista',
  },
];

const Item = ({ title, subtitle }) => {
  const navigator = useNavigation();
  return(  
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Track Player")}>
      <LinearGradient style={S.itemScreen} colors={['#82f0ff', '#910068']}>
          <Text style={S.textImageStyle}>M</Text>
      </LinearGradient>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>    
    </TouchableOpacity>
  );
};

const Item2 = ({ title }) => {
  const navigator = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Artist Screen")}>
      <LinearGradient style={S.itemScreen} colors={['#eb88cf', '#22bef2']}>
          <Text style={S.textImageStyle}>A</Text>
      </LinearGradient>
        <Text style={S.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const DiscoverSection = () => {
    const renderItem = ({ item }) => {
        if (item.title == 'Música'){
            return <Item title={item.title} subtitle={item.subtitle}/>
        } else return <Item2 title={item.title}/>
    };


    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Descubra algo novo pra você</Text>        
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

export default DiscoverSection;