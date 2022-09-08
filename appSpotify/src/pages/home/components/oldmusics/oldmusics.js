import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import S from './styled';

const DATA = [
  {
    id: '1',
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },
  {
    id: '2',
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },
  {
    id: '3',
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id:'4',
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id: '5',
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id: '6',
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id: '7',
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id: '8',
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },
];


const Item = ({ title, subtitle }) =>{ 
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigation.navigate("Track Player")}>
      <LinearGradient style={S.image} colors={['#b3ffe9', '#0c17eb']}>
        <Text style={S.textImageStyle}>M</Text>
      </LinearGradient>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>    
    </TouchableOpacity>
  );
};

const Item2 = ({ title, subtitle }) => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigation.navigate("Track Player")}>
      <LinearGradient style={S.image} colors={['#e69583', '#b03215']} >
        <Text style={S.textImageStyle}>M</Text>
      </LinearGradient>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>    
    </TouchableOpacity>
  );
};

const Item3 = ({ title, subtitle }) => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigation.navigate("Track Player")}>
      <LinearGradient style={S.image} colors={['#f0de6e', '#7d6f05']}>
        <Text style={S.textImageStyle}>M</Text>
      </LinearGradient>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>    
    </TouchableOpacity>
  );
};

const OldMusicsSection = () => {
  const renderItem = ({ item }) => {
    if(item.id == '1' || item.id == '3' || item.id == '6'){
      return <Item title={item.title} subtitle={item.subtitle}/>
    }else if(item.id == '2' || item.id == '4' || item.id == '8'){
      return <Item2 title={item.title} subtitle={item.subtitle}/>
    } else return <Item3 title={item.title} subtitle={item.subtitle}/>
  };

  return(
      <View style={S.titleContainer}>
          <Text style={S.oMTitle}>Suas músicas estão com saudade</Text>        
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

export default OldMusicsSection;