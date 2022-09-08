import React from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import S from './styled';


const DATA = [
  {
    id: 1,
    title: 'Nome do Álbum',
    subtitle: 'Álbum - Artista',
  },
  {
    id: 2,
    title: 'Nome do Álbum',
    subtitle: 'Álbum - Artista',
  },
  {
    id: 3,
    title: 'Nome do Álbum',
    subtitle: 'Álbum - Artista',
  },

  {
    id:4,
    title: 'Nome do Álbum',
    subtitle: 'Álbum - Artista',
  },

  {
    id:5,
    title: 'Nome do Álbum',
    subtitle: 'Álbum - Artista',
  },

  {
    id:6,
    title: 'Nome do Álbum',
    subtitle: 'Álbum - Artista',
  },

  {
    id:7,
    title: 'Nome do Álbum',
    subtitle: 'Álbum - Artista',
  },

  {
    id:8,
    title: 'Nome do Álbum',
    subtitle: 'Álbum - Artista',
  },
];

const Item = ({ title, subtitle }) => {
  const navigator = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Album Screen")}>
      <LinearGradient style={S.itemScreen} colors={['#eb88cf', '#910068']}>
          <Text style={S.textImageStyle}>A</Text>
      </LinearGradient>      
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>    
    </TouchableOpacity>
  )
};

const AlbunsSection = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} subtitle={item.subtitle}/>
      );

    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Álbuns para você</Text>        
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

export default AlbunsSection;