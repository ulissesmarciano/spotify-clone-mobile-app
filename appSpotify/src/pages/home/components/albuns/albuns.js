import React from "react";
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import S from './styled'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';

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

const Item = ({ title, subtitle }) => (
    <View style={S.item}>
      <Image style={S.image} source={{uri: imageProfileGithub}}/>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>    
    </View>
  );

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