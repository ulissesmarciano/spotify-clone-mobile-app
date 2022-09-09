import React from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, Touchable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import S from './styled';


const DATA = [
  {
    id: 1,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },
  {
    id: 2,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },
  {
    id: 3,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },

  {
    id:4,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },

  {
    id:5,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },

  {
    id:6,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },

  {
    id:7,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },

  {
    id:8,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },
];

const Item = ({ title }) => {
  const navigator = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Artist Screen")}>
      <View style={S.imageOrientation}>
      <LinearGradient style={S.itemScreen} colors={['#d4ba3b', '#ff7700']}>
          <Text style={S.textImageStyle}>A</Text>
      </LinearGradient>
      <LinearGradient style={S.itemScreen} colors={['#83d9eb', '#008099']}>
          <Text style={S.textImageStyle}>A</Text>
      </LinearGradient>
      </View>
      <View style={S.imageOrientation}>
      <LinearGradient style={S.itemScreen} colors={['#78f582', '#01800c']}>
          <Text style={S.textImageStyle}>A</Text>
      </LinearGradient>
      <LinearGradient style={S.itemScreen} colors={['#eb88cf', '#910068']}>
          <Text style={S.textImageStyle}>A</Text>
      </LinearGradient>
      </View>
      <Text style={S.title}>{title}</Text>
    </TouchableOpacity>
)
};

const MixSugestionSection = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );


    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Seus mixes mais ouvidos</Text>        
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

export default MixSugestionSection;